import { useState, useEffect } from 'react';

interface UseValidationProps {
  dependency: any[];
  defaultValue: any;
}

const checkIfEmpty = (dependency: any): boolean => !Boolean(dependency.length);

export const useValidation: React.FC<UseValidationProps> = (props) => {
  const { dependency, defaultValue } = props;
  const [isEmpty, setIsEmpty] = useState(defaultValue);

  useEffect(() => {
    setIsEmpty(checkIfEmpty(dependency));
  }, [dependency]);

  return isEmpty;
};
