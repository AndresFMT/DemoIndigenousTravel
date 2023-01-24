import {expect, vi, test} from 'vitest';
import {render} from 'test/utils';

import Header from './Header'

test('header is rendering with minimal data', () => {
  const { data, error, isLoading } = useSWR('/api/sanity-nav', fetcher);
  
  const header = render(<Header 
                          transparent={false} 
                          data={data} 
                          isLoading={isLoading} 
                          error={error}/>);  

  expect(header).toBeNull();

});

