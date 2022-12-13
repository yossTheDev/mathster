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
				<CalcButton isFunction={true} operation='sqrt()' label='sqrt'>
					<IconSquareRoot></IconSquareRoot>
				</CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Qubic Root'
					operation='cbrt()'
					label='cbrt'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Absolute Value'
					operation='abs()'
					label='abs'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Round Value'
					operation='ceil()'
					label='ceil'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='cube()'
					label='cube'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Exponential Value'
					operation='exp()'
					label='exp'
				></CalcButton>
				<CalcButton isFunction={true} operation='fix(' label='fix'></CalcButton>
				<CalcButton
					isFunction={true}
					operation='floor()'
					label='floor'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Evaluate great common divisor gcd(a,b)'
					operation='gcd()'
					label='gcd'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the hypotenusa of a list with values. hypot(a,b,...)'
					operation='hypot()'
					label='hypot'
				></CalcButton>
				)
				<CalcButton
					isFunction={true}
					tooltip='Logarithm log(x,base)'
					operation='log()'
					label='log'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the 10-base logarithm of a value'
					operation='log10()'
					label='log10'
				>
					<p>
						log<sub>10</sub>
					</p>
				</CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculates the modulus mod(x,y)'
					operation='mod()'
					label='mod'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Power of x ^ y'
					operation='^'
				></CalcButton>
			</div>

			{/* Complex Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>2i</div>

				<CalcButton
					isFunction={true}
					tooltip='Compute the argument of a complex value'
					operation='arg()'
					label='arg'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Compute the complex conjugate of a complex value'
					operation='conj()'
					label='conj'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Get the imaginary part of a complex number.'
					operation='im()'
					label='im'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Get the real part of a complex number.'
					operation='re()'
					label='re'
				></CalcButton>
			</div>

			{/* Geometry Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconBox></IconBox>
				</div>

				<CalcButton
					isFunction={true}
					tooltip='Calculates: The eucledian distance between two points in N-dimensional spaces. 
							Ex: distance([x1, y1], [x2, y2])'
					operation='distance()'
					label='distance'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculates the point of intersection Ex: intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)'
					operation='conj()'
					label='conj'
				></CalcButton>
			</div>

			{/* Logical Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconAmpersand></IconAmpersand>
				</div>

				<CalcButton
					isFunction={true}
					operation='and()'
					label='and'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='not()'
					label='not'
				></CalcButton>
				<CalcButton isFunction={true} operation='or()' label='or'></CalcButton>
				<CalcButton
					isFunction={true}
					operation='xor()'
					label='xor'
				></CalcButton>
			</div>

			{/* Trigonometry Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
				<div className='bg-white shadow p-2 text-black'>
					<IconTriangle></IconTriangle>
				</div>

				<CalcButton
					isFunction={true}
					operation='acos()'
					label='acos'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='acosh()'
					label='acosh'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='acot()'
					label='acot'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='acoth()'
					label='acoth'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='acsc()'
					label='acsc'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='acsch()'
					label='acsch'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='asec()'
					label='asec'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='asech()'
					label='asech'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='asin()'
					label='asin'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='atan()'
					label='atan'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='atanh()'
					label='asin'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='cos()'
					label='cos'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='cosh()'
					label='cosh'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='cot()'
					label='cot'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='coth()'
					label='coth'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='csc()'
					label='csc'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='csch()'
					label='csch'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='sec()'
					label='sec'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='sech()'
					label='sech'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='sin()'
					label='sin'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='sinh()'
					label='sinh'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='tan()'
					label='tan'
				></CalcButton>
				<CalcButton
					isFunction={true}
					operation='tanh()'
					label='tanh'
				></CalcButton>
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
					isFunction={true}
					tooltip='Format a number as hexadecimal'
					operation='hex()'
					label='hex'
				></CalcButton>

				<CalcButton
					isFunction={true}
					tooltip='Format a number as octal'
					operation='oct()'
					label='oct'
				></CalcButton>

				<CalcButton
					isFunction={true}
					tooltip='Format a number as binary'
					operation='bin()'
					label='bin'
				></CalcButton>
			</div>
		</>
	);
};
