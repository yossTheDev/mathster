import {
	IconRoad,
	IconSquareForbid,
	IconBox,
	IconBucket,
	IconAngle,
	IconClock,
	IconHourglass,
	IconWeight,
	IconBolt,
	IconTemperature,
	IconFlask,
	IconBulb,
	IconApple,
	IconBuildingWindTurbine,
	IconEngine,
	IconBinary,
} from '@tabler/icons';
import React from 'react';
import { CalcButton } from '../CalcButton';

export const UnitsTab: React.FC = () => {
	return (
		<div className='h-4 dark:text-gray-400'>
			{/* Length Units */}
			<div className='flex flex-row flex-auto overflow-x-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconRoad></IconRoad>
				</div>
				<CalcButton operation='mm '></CalcButton>
				<CalcButton operation='dm '></CalcButton>
				<CalcButton operation='cm '></CalcButton>
				<CalcButton operation='m '></CalcButton>
				<CalcButton operation='dam '></CalcButton>
				<CalcButton operation='hm '></CalcButton>
				<CalcButton operation='km '></CalcButton>
				<CalcButton tooltip='inch' operation='in '></CalcButton>
				<CalcButton tooltip='foot' operation='ft '></CalcButton>
				<CalcButton tooltip='yard' operation='yd '></CalcButton>
				<CalcButton tooltip='mile' operation='mi '></CalcButton>
				<CalcButton tooltip='link' operation='li '></CalcButton>
				<CalcButton tooltip='rod' operation='rd '></CalcButton>
				<CalcButton tooltip='chain' operation='ch '></CalcButton>
				<CalcButton operation='angstrom '></CalcButton>
				<CalcButton operation='mil '></CalcButton>
			</div>

			{/* Surface Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconSquareForbid></IconSquareForbid>
				</div>
				<CalcButton operation='m2 '></CalcButton>
				<CalcButton operation='sqin '></CalcButton>
				<CalcButton operation='sqft '></CalcButton>
				<CalcButton operation='sqyd '></CalcButton>
				<CalcButton operation='sqmi '></CalcButton>
				<CalcButton operation='sqrd '></CalcButton>
				<CalcButton operation='sqch '></CalcButton>
				<CalcButton operation='acre '></CalcButton>
				<CalcButton operation='hectare '></CalcButton>
			</div>

			{/* Volume Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBox></IconBox>
				</div>
				<CalcButton operation='m3 '></CalcButton>
				<CalcButton tooltip='liter' operation='L '></CalcButton>
				<CalcButton operation='cc '></CalcButton>
				<CalcButton operation='cuin '></CalcButton>
				<CalcButton operation='cuft '></CalcButton>
				<CalcButton operation='cuyd '></CalcButton>
				<CalcButton operation='teaspoon '></CalcButton>
				<CalcButton operation='tablespoon '></CalcButton>
			</div>

			{/* Liquid Volume Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBucket></IconBucket>
				</div>
				<CalcButton operation='minim '></CalcButton>
				<CalcButton tooltip='fluiddram' operation='fldr '></CalcButton>
				<CalcButton tooltip='fluidounce' operation='floz '></CalcButton>
				<CalcButton tooltip='gill' operation='gi '></CalcButton>
				<CalcButton tooltip='cup' operation='cp '></CalcButton>
				<CalcButton tooltip='pint' operation='pt '></CalcButton>
				<CalcButton tooltip='quart' operation='qt '></CalcButton>
				<CalcButton tooltip='gallon' operation='gal '></CalcButton>
				<CalcButton tooltip='beerbarrel' operation='bbl '></CalcButton>
				<CalcButton tooltip='oilbarrel' operation='obl '></CalcButton>
				<CalcButton operation='hogshead '></CalcButton>
				<CalcButton tooltip='drop' operation='gtt '></CalcButton>
			</div>

			{/* Angles Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconAngle></IconAngle>
				</div>
				<CalcButton tooltip='radian' operation='rad '></CalcButton>
				<CalcButton tooltip='degree' operation='deg '></CalcButton>
				<CalcButton tooltip='gradian' operation='grad '></CalcButton>
				<CalcButton tooltip='' operation='cycle '></CalcButton>
				<CalcButton tooltip='arcsecond' operation='arcsec '></CalcButton>
				<CalcButton tooltip='arcminute' operation='arcmin '></CalcButton>
			</div>

			{/* Time Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconClock></IconClock>
				</div>
				<CalcButton tooltip='second' operation='s '></CalcButton>
				<CalcButton tooltip='minute' operation='min '></CalcButton>
				<CalcButton tooltip='hour' operation='h '></CalcButton>
				<CalcButton tooltip='days' operation='day '></CalcButton>
				<CalcButton tooltip='weeks' operation='week '></CalcButton>
				<CalcButton tooltip='years' operation='year '></CalcButton>
				<CalcButton tooltip='decades' operation='decade '></CalcButton>
				<CalcButton tooltip='centuries' operation='century '></CalcButton>
				<CalcButton tooltip='millennium' operation='millennia '></CalcButton>
			</div>

			{/* Frequency Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconHourglass></IconHourglass>
				</div>
				<CalcButton
					className='w-16 flex-none'
					tooltip='hertz'
					operation='Hz '
				></CalcButton>
			</div>

			{/* Mass Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconWeight></IconWeight>
				</div>
				<CalcButton tooltip='' operation='mg '></CalcButton>
				<CalcButton tooltip='' operation='dg '></CalcButton>
				<CalcButton tooltip='' operation='cg '></CalcButton>
				<CalcButton tooltip='gram' operation='g '></CalcButton>
				<CalcButton tooltip='' operation='dag '></CalcButton>
				<CalcButton tooltip='' operation='hg '></CalcButton>
				<CalcButton tooltip='' operation='kg '></CalcButton>
				<CalcButton tooltip='' operation='tonne '></CalcButton>
				<CalcButton tooltip='' operation='ton '></CalcButton>
				<CalcButton tooltip='grain' operation='gr '></CalcButton>
				<CalcButton tooltip='dram' operation='dr '></CalcButton>
				<CalcButton tooltip='ounce' operation='oz '></CalcButton>
				<CalcButton tooltip='poundmass' operation='lb '></CalcButton>
				<CalcButton tooltip='hundredweight' operation='cwt '></CalcButton>
				<CalcButton tooltip='' operation='stick '></CalcButton>
				<CalcButton tooltip='' operation='stone '></CalcButton>
			</div>

			{/* Electric Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBolt></IconBolt>
				</div>
				<CalcButton tooltip='ampere' operation='A '></CalcButton>
				<CalcButton tooltip='coulomb' operation='C '></CalcButton>
				<CalcButton tooltip='watt' operation='W '></CalcButton>
				<CalcButton tooltip='volt' operation='V '></CalcButton>
				<CalcButton tooltip='' operation='ohm '></CalcButton>
				<CalcButton tooltip='farad' operation='F '></CalcButton>
				<CalcButton tooltip='weber' operation='Wb '></CalcButton>
				<CalcButton tooltip='tesla' operation='T '></CalcButton>
				<CalcButton tooltip='henry' operation='H '></CalcButton>
				<CalcButton tooltip='siemens' operation='S '></CalcButton>
				<CalcButton tooltip='electronvolt' operation='eV '></CalcButton>
			</div>

			{/* Temperature Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconTemperature></IconTemperature>
				</div>
				<CalcButton tooltip='kelvin' operation='K '></CalcButton>
				<CalcButton tooltip='celsius' operation='degC '></CalcButton>
				<CalcButton tooltip='fahrenheit' operation='degF '></CalcButton>
				<CalcButton tooltip='rankine' operation='degR '></CalcButton>
				<CalcButton tooltip='' operation='ohm '></CalcButton>
				<CalcButton tooltip='farad' operation='F '></CalcButton>
				<CalcButton tooltip='weber' operation='Wb '></CalcButton>
				<CalcButton tooltip='tesla' operation='T '></CalcButton>
				<CalcButton tooltip='henry' operation='H '></CalcButton>
				<CalcButton tooltip='siemens' operation='S '></CalcButton>
				<CalcButton tooltip='electronvolt' operation='eV '></CalcButton>
			</div>

			{/* Amount of Substance Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconFlask></IconFlask>
				</div>
				<CalcButton
					className='w-16 flex-none'
					tooltip='mole'
					operation='mol '
				></CalcButton>
			</div>

			{/* Luminous Intencity Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBulb></IconBulb>
				</div>
				<CalcButton
					className='w-16 flex-none'
					tooltip='candela'
					operation='cd '
				></CalcButton>
			</div>

			{/* Force Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconApple></IconApple>
				</div>
				<CalcButton tooltip='newton' operation='N '></CalcButton>
				<CalcButton tooltip='dyne' operation='dyn '></CalcButton>

				<CalcButton tooltip='poundforce' operation='ibf '></CalcButton>
				<CalcButton tooltip='' operation='kip '></CalcButton>
			</div>

			{/* Energy Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBuildingWindTurbine></IconBuildingWindTurbine>
				</div>
				<CalcButton tooltip='joule' operation='J '></CalcButton>
				<CalcButton tooltip='' operation='erg '></CalcButton>
				<CalcButton tooltip='' operation='Wh '></CalcButton>
				<CalcButton tooltip='' operation='BTU '></CalcButton>
			</div>

			{/* Pressure Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconEngine></IconEngine>
				</div>
				<CalcButton tooltip='' operation='Pa '></CalcButton>
				<CalcButton tooltip='' operation='psi '></CalcButton>
				<CalcButton tooltip='' operation='atm '></CalcButton>
				<CalcButton tooltip='' operation='torr '></CalcButton>
				<CalcButton tooltip='' operation='bar '></CalcButton>
				<CalcButton tooltip='' operation='mmHg '></CalcButton>
				<CalcButton tooltip='' operation='mmH2O '></CalcButton>
				<CalcButton tooltip='' operation='cmH2O '></CalcButton>
			</div>

			{/* Binary Units */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconBinary></IconBinary>
				</div>
				<CalcButton
					className='w-16 flex-none'
					tooltip='bits'
					operation='b '
				></CalcButton>
				<CalcButton
					className='w-16 flex-none'
					tooltip='bytes'
					operation='B '
				></CalcButton>
			</div>
		</div>
	);
};
