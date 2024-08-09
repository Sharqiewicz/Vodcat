import { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Alcohol, Game } from '../../types';
import { RootState } from '../../storage/store';

const RoulettePage = ({ game, setIsShotPrepared }: { game: Game; setIsShotPrepared: any }) => {
  const [chosenAlcohol, setChosenAlcohol] = useState<Alcohol | null>(null);
  const [chosenAlcohols, setChosenAlcohols] = useState<Alcohol[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const alcohols: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);

  const angVelRef = useRef<number>(0);
  const angRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spinElRef = useRef<HTMLElement | null>(null);

  const rand = (min: number, max: number): number => Math.random() * (max - min) + min;
  const tot = alcohols.length;
  const PI = Math.PI;
  const TAU = 2 * PI;
  const arc = TAU / tot;
  const friction = 0.995; // 0.995=soft, 0.99=mid, 0.98=hard

  const getIndex = useCallback(() => Math.floor(tot - (angRef.current / TAU) * tot) % tot, [TAU, tot]);

  const drawSector = useCallback(
    (ctx: CanvasRenderingContext2D, sector: Alcohol, i: number, rad: number): void => {
      const angle = arc * i;
      ctx.save();
      // COLOR
      ctx.beginPath();
      ctx.fillStyle = sector.color;
      ctx.moveTo(rad, rad);
      ctx.arc(rad, rad, rad, angle, angle + arc);
      ctx.lineTo(rad, rad);
      ctx.fill();
      // TEXT
      ctx.translate(rad, rad);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(sector.name, rad - 10, 10);
      ctx.restore();
    },
    [arc]
  );

  const rotate = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, spinEl: HTMLElement): void => {
      const sector = alcohols[getIndex()];
      canvas.style.transform = `rotate(${angRef.current - PI / 2}rad)`;
      spinEl.textContent = !angVelRef.current ? 'SPIN' : sector.name;
      spinEl.style.background = sector.color;
    },
    [alcohols, getIndex, PI]
  );

  const frame = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, spinEl: HTMLElement): void => {
      if (!angVelRef.current) {
        setIsSpinning(false);
        return;
      }
      angVelRef.current *= friction; // Decrement velocity by friction
      if (angVelRef.current < 0.002) {
        angVelRef.current = 0; // Bring to stop
        const sector = alcohols[getIndex()];
        setChosenAlcohol(sector);
      }
      angRef.current += angVelRef.current; // Update angle
      angRef.current %= TAU; // Normalize angle
      rotate(ctx, canvas, spinEl);
    },
    [TAU, rotate, alcohols, getIndex]
  );

  const engine = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, spinEl: HTMLElement): void => {
      frame(ctx, canvas, spinEl);
      requestAnimationFrame(() => engine(ctx, canvas, spinEl));
    },
    [frame]
  );

  const init = useCallback(
    (canvas: HTMLCanvasElement, spinEl: HTMLElement) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const rad = canvas.width / 2;

      [...alcohols, ...alcohols].forEach((alcohol, i) => drawSector(ctx, alcohol, i, rad));
      rotate(ctx, canvas, spinEl);
      engine(ctx, canvas, spinEl);
    },
    [alcohols, drawSector, rotate, engine]
  );

  useEffect(() => {
    const canvas = document.getElementById('wheel') as HTMLCanvasElement;
    const spinEl = document.getElementById('spin') as HTMLElement;
    if (canvas && spinEl) {
      canvas.width = 600;
      canvas.height = 600;
      canvasRef.current = canvas;
      spinElRef.current = spinEl;
      init(canvas, spinEl);
    }
    return () => {
      canvasRef.current = null;
      spinElRef.current = null;
    };
  }, [alcohols, init]);

  useEffect(() => {
    if (!isSpinning) {
      const shotIsPrepared = game.prepareShot(chosenAlcohols);
      if (shotIsPrepared) {
        setIsShotPrepared(shotIsPrepared);
      }
    }
  }, [chosenAlcohols, game, isSpinning, setIsShotPrepared]);

  const handleOnClick = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    chosenAlcohol && setChosenAlcohols((prev) => [...prev, chosenAlcohol]);
    setChosenAlcohol(null);
    if (!angVelRef.current) angVelRef.current = rand(0.001, 0.002);
  }, [chosenAlcohol, isSpinning]);

  return (
    <div className="relative" style={{ width: 600, height: 600 }}>
      <canvas id="wheel" ref={canvasRef}></canvas>
      <button id="spin" ref={spinElRef as any} onClick={handleOnClick} disabled={isSpinning}>
        SPIN
      </button>
    </div>
  );
};

export default RoulettePage;
