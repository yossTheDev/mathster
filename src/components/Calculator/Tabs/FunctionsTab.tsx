import {
	IconBrackets,
	IconSquareRoot,
	IconMathFunction,
	IconBox,
	IconAmpersand,
	IconTriangle,
	IconArrowsExchange,
	IconLetterI,
	IconSuperscript,
} from '@tabler/icons';
import React from 'react';
import { CalcButton } from '../CalcButton';

export const FunctionsTab: React.FC = () => {
	return (
		<div className='h-4 dark:text-gray-400'>
			{/* Grouping */}
			<div className='flex flex-row flex-auto overflow-scroll dark:bg-gray-800 bg-gray-100'>
				<div className='bg-white dark:bg-base-200 shadow p-2 text-black dark:text-white'>
					<IconBrackets></IconBrackets>
				</div>

				<CalcButton operation='{'></CalcButton>
				<CalcButton operation='}'></CalcButton>
				<CalcButton operation='['></CalcButton>
				<CalcButton operation=']'></CalcButton>
				<CalcButton operation='('></CalcButton>
				<CalcButton operation=')'></CalcButton>
			</div>

			{/* Algebra Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconSuperscript></IconSuperscript>
				</div>

				<CalcButton
					isFunction={true}
					tooltip='Takes the derivative of an expression expressed in parser Nodes. Ex: derivative(expression,variable)'
					operation='derivative()'
					label='derivative'
				></CalcButton>

				<CalcButton
					isFunction={true}
					tooltip='Transform a rationalizable expression in a rational fraction'
					operation='rationalize()'
					label='rationalize'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip="Resolve(expression, scope) replaces variable nodes with their scoped values Ex: resolve('x²',{x:5}'"
					operation='resolve()'
					label='resolve'
				></CalcButton>

				<CalcButton
					isFunction={true}
					tooltip='Simplify an expression tree Ex: simplify(expression)'
					operation='simplify()'
					label='simplify'
				></CalcButton>
			</div>

			{/* Arithmetic Functions */}
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
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
					tooltip='Calculate the cubic root of a value'
					operation='cbrt()'
					label='cbrt'
				>
					<div className='flex flex-row'>
						<sup className='inline-block mt-2'>3</sup>
						<IconSquareRoot className='inline-block'></IconSquareRoot>
					</div>
				</CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the absolute value of a number'
					operation='abs()'
					label='abs'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Round a value towards plus infinity If x is complex, both real and imaginary part are rounded towards plus infinity'
					operation='ceil()'
					label='ceil'
				></CalcButton>
				<CalcButton
					tooltip='Compute the cube of a value, x * x * x'
					isFunction={true}
					operation='cube()'
					label='cube'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the exponential of a value'
					operation='exp()'
					label='exp'
				></CalcButton>
				<CalcButton
					tooltip='Round a value towards zero'
					isFunction={true}
					operation='fix()'
					label='fix'
				></CalcButton>
				<CalcButton
					tooltip='Round a value towards minus infinity'
					isFunction={true}
					operation='floor()'
					label='floor'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the greatest common divisor for two or more values or arrays Ex: gcd(a,b)'
					operation='gcd()'
					label='gcd'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the least common multiple for two or more values or arrays Ex: lcm(a,b)'
					operation='lcm()'
					label='lcm'
				></CalcButton>
				<CalcButton
					isFunction={true}
					tooltip='Calculate the hypotenusa of a list with values. hypot(a,b,...)'
					operation='hypot()'
					label='hypot'
				></CalcButton>

				<CalcButton
					isFunction={true}
					tooltip='Calculate the logarithm of a value Ex: log(x,base)'
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
					tooltip='Calculates the modulus, the remainder of an integer division. Ex mod(x,y))'
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
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
					<IconLetterI></IconLetterI>
				</div>

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
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
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
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
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
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
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
			<div className='flex flex-row flex-auto overflow-scroll bg-gray-100 dark:bg-gray-800'>
				<div className='bg-white shadow p-2 text-black  dark:bg-base-200 dark:text-white'>
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
		</div>
	);
};
