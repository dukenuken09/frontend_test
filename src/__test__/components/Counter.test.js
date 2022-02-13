import React from 'react';
import {mount} from 'enzyme';
import Counter from '../../components/Counter';
import { act } from '@testing-library/react';
import Tab from '@mui/material/Tab';
import { TabList } from '@mui/lab';


describe('Counter Component', () => {

    const mokCall = () => Promise.resolve({data:{values:1000}})

    const mockTabs = [{
        title:'Entitats',
        functions:{
          keys:['contractes','membres'],
          actions: [mokCall,mokCall]
        },
      },
      {
        title:'Entitats Privades',
        functions:{
          keys:['contractes','membres'],
          actions:[mokCall,mokCall]
        },
      }]

    let wrapper;

    test('Should Entitats as a default selected Tab ', async () => {
        await act(async () => {
            wrapper = mount(
            <Counter tabs={mockTabs}/>)
        });
        expect(wrapper.find(Tab).at(0).props().label).toBe('Entitats')
        expect(wrapper.find(Tab).at(0).props().selected).toBeTruthy()
    })

    test('Should Entitats Privades as a selected Tab ', async () => {
        const event = {
            preventDefault() {},
            target: { value: 'Entitats Privades' }
          };

        await act(async () => {
            wrapper = mount(
            <Counter tabs={mockTabs}/>)
            await wrapper.find(Tab).find('button').at(1).simulate('click')
            
        });
        
        await act(async () => {
            wrapper.update()
            expect(wrapper.find(Tab).at(1).props().selected).toBeTruthy()
        })
        
    }) 
})