import { useCallback, useEffect, useState } from 'react';
import { trainingRepository } from '@/data/trainingRepository';
import type { TrainingOverview } from '@/domain/training';

type OverviewState =
  | { status: 'loading' }
  | { status: 'ready'; data: TrainingOverview }
  | { status: 'error' };

export function useTrainingOverview() {
  const [state, setState] = useState<OverviewState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  const retry = useCallback(() => {
    setState({ status: 'loading' });
    setAttempt((value) => value + 1);
  }, []);

  useEffect(() => {
    let active = true;
    trainingRepository.getOverview(new Date()).then(
      (data) => { if (active) setState({ status: 'ready', data }); },
      () => { if (active) setState({ status: 'error' }); },
    );
    return () => { active = false; };
  }, [attempt]);

  return { state, retry };
}
