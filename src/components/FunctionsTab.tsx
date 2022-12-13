import {
	IconBrackets,
	IconSquareRoot,
	IconMathFunction,
	IconBox,
	IconAmpersand,
	IconTriangle,
	IconArrowsExchange,
} from '@tabler/icons';
import React from 'react';
import { CalcButton } from './CalcButton';

export const FunctionsTab: React.FC = () => {
	return (
		<>
			{/* Grouping */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconBrackets></IconBrackets>
				</div>

				<CalcButton operation='{'></CalcButton>
				<CalcButton operation='}'></CalcButton>
				<CalcButton operation='['></CalcButton>
				<CalcButton operation=']'></CalcButton>
				<CalcButton operation='('></CalcButton>
				<CalcButton operation=')'></CalcButton>
			</div>

			{/* Arithmetic Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconSquareRoot></IconSquareRoot>
				</div>
				<CalcButton operation='f(x)=' label='f(x)'>
					<IconMathFunction></IconMathFunction>
				</CalcButton>
				<CalcButton operation='sqrt(' label='sqrt'>
					<IconSquareRoot></IconSquareRoot>
				</CalcButton>
				<CalcButton
					tooltip='Qubic Root'
					operation='cbrt('
					label='cbrt'
				></CalcButton>
				<CalcButton
					tooltip='Absolute Value'
					operation='abs('
					label='abs'
				></CalcButton>
				<CalcButton
					tooltip='Round Value'
					operation='ceil('
					label='ceil'
				></CalcButton>
				<CalcButton operation='cube(' label='cube'></CalcButton>
				<CalcButton
					tooltip='Exponential Value'
					operation='exp('
					label='exp'
				></CalcButton>
				<CalcButton operation='fix(' label='fix'></CalcButton>
				<CalcButton operation='floor(' label='floor'></CalcButton>

				<CalcButton
					tooltip='Evaluate great common divisor gcd(a,b)'
					operation='gcd('
					label='gcd'
				></CalcButton>

				<CalcButton
					tooltip='Calculate the hypotenusa of a list with values. hypot(a,b,...)'
					operation='hypot('
					label='hypot'
				></CalcButton>

				<CalcButton
					tooltip='Logarithm log(x,base)'
					operation='log('
					label='log'
				></CalcButton>

				<CalcButton
					tooltip='Calculate the 10-base logarithm of a value'
					operation='log10('
					label='log10'
				>
					<p>
						log<sub>10</sub>
					</p>
				</CalcButton>

				<CalcButton
					tooltip='Calculates the modulus mod(x,y)'
					operation='mod('
					label='mod'
				></CalcButton>
				<CalcButton tooltip='Power of x ^ y' operation='^'></CalcButton>
			</div>

			{/* Complex Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>2i</div>

				<CalcButton
					tooltip='Compute the argument of a complex value'
					operation='arg('
					label='arg'
				></CalcButton>
				<CalcButton
					tooltip='Compute the complex conjugate of a complex value'
					operation='conj('
					label='conj'
				></CalcButton>
				<CalcButton
					tooltip='Get the imaginary part of a complex number.'
					operation='im('
					label='im'
				></CalcButton>
				<CalcButton
					tooltip='Get the real part of a complex number.'
					operation='re('
					label='re'
				></CalcButton>
			</div>

			{/* Geometry Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconBox></IconBox>
				</div>

				<CalcButton
					tooltip='Calculates: The eucledian distance between two points in N-dimensional spaces. 
							Ex: distance([x1, y1], [x2, y2])'
					operation='distance('
					label='distance'
				></CalcButton>
				<CalcButton
					tooltip='Calculates the point of intersection Ex: intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)'
					operation='conj('
					label='conj'
				></CalcButton>
			</div>

			{/* Logical Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconAmpersand></IconAmpersand>
				</div>

				<CalcButton operation='and(' label='and'></CalcButton>
				<CalcButton operation='not(' label='not'></CalcButton>
				<CalcButton operation='or(' label='or'></CalcButton>
				<CalcButton operation='xor(' label='xor'></CalcButton>
			</div>

			{/* Trigonometry Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconTriangle></IconTriangle>
				</div>

				<CalcButton operation='acos(' label='acos'></CalcButton>
				<CalcButton operation='acosh(' label='acosh'></CalcButton>
				<CalcButton operation='acot(' label='acot'></CalcButton>
				<CalcButton operation='acoth(' label='acoth'></CalcButton>
				<CalcButton operation='acsc(' label='acsc'></CalcButton>
				<CalcButton operation='acsch(' label='acsch'></CalcButton>
				<CalcButton operation='asec(' label='asec'></CalcButton>
				<CalcButton operation='asech(' label='asech'></CalcButton>
				<CalcButton operation='asin(' label='asin'></CalcButton>
				<CalcButton operation='atan(' label='atan'></CalcButton>
				<CalcButton operation='atanh(' label='asin'></CalcButton>
				<CalcButton operation='cos(' label='cos'></CalcButton>
				<CalcButton operation='cosh(' label='cosh'></CalcButton>
				<CalcButton operation='cot(' label='cot'></CalcButton>
				<CalcButton operation='coth(' label='coth'></CalcButton>
				<CalcButton operation='csc(' label='csc'></CalcButton>
				<CalcButton operation='csch(' label='csch'></CalcButton>
				<CalcButton operation='sec(' label='sec'></CalcButton>
				<CalcButton operation='sech(' label='sech'></CalcButton>
				<CalcButton operation='sin(' label='sin'></CalcButton>
				<CalcButton operation='sinh(' label='sinh'></CalcButton>
				<CalcButton operation='tan(' label='tan'></CalcButton>
				<CalcButton operation='tanh(' label='tanh'></CalcButton>
			</div>

			{/* Conversion Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconArrowsExchange></IconArrowsExchange>
				</div>

				<CalcButton
					tooltip='Change the unit of a value'
					operation='to'
				></CalcButton>
				<CalcButton
					tooltip='Change the unit of a value'
					operation='in'
				></CalcButton>

				<CalcButton
					tooltip='Format a number as hexadecimal'
					operation='hex('
					label='hex'
				></CalcButton>

				<CalcButton
					tooltip='Format a number as octal'
					operation='oct('
					label='oct'
				></CalcButton>

				<CalcButton
					tooltip='Format a number as binary'
					operation='bin('
					label='bin'
				></CalcButton>
			</div>
		</>
	);
};
