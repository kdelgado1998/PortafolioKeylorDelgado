import React from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Slider } from '../components/Slider';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
        <main>
        < Header />
        < Outlet />
        < Footer />
        </main>
    </>  
  )
};