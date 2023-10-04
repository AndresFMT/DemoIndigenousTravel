import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

type useSearchParamsState = readonly [
  searchParamState: string| string[] | undefined,
  setSearchParamState: (newState: string) => void
]

/**
 * this isn't working yet
  */
const useSearchParamsState = (param:string ):useSearchParamsState => {
    const router = useRouter();
    const [state, setState] = useState(router.query[param] || '');

    useEffect(() => {
      if (router) {
        router.replace({
          pathname: router.pathname,
          query: {param, state},
        }, undefined, { shallow: true });
    }
    }, [state]);
    return [state, setState];
}

export default useSearchParamsState;
