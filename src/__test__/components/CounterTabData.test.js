import { render } from '@testing-library/react';
import CounterTabData from '../../components/CounterTabData';


describe('CounterTabData component', () => {

 const data = {title:'test_title',values:'test_values'}

 test('Should show the data that receives', () => {
   const {getByText,container} = render(<CounterTabData data={data} />);
   expect(getByText('test_title')).toBeInTheDocument()
   expect(getByText('test_values')).toBeInTheDocument()
 });
})