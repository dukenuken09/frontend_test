import React from 'react';
import {mount} from 'enzyme';
import CounterTab from '../../components/CounterTab';
import { act } from '@testing-library/react';



describe('CounterTab component', () => {

    const mokCall = () => Promise.resolve({data:{values:1000}})
    const mokFailCall = () => Promise.reject('Error')

    const dataRecover = {
        keys:['contractes','membres'],
        actions:[mokCall,mokCall]
    }

    const faildataRecover = {
        keys:['contractes','membres'],
        actions:[mokFailCall,mokFailCall]
    }

    let wrapper;

    test('Should show the from the api', async () => {
        await act(async () => {
            wrapper = mount(
            <CounterTab dataRecover={dataRecover}/>)
        });
        expect(wrapper.find('#data_item').at(0).text()).toBe('1000/1000contractes/membres')
    })

    test('Should show error message ', async () => {

        await act(async () => {
            wrapper = mount(
            <CounterTab dataRecover={faildataRecover}/>)
        });
        expect(wrapper.find('#data_item').at(0).text()).toBe("Algunes dades no s'han pogut obtenircontractes/membres")
    })
})


 