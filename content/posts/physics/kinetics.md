---
title: Kinetic Theory of Gases
description: Explore the fascinating world of gases through the lens of the kinetic theory.
date: 2023-02-05
draft: false
slug: /pensieve/physics/kinetics
tags:
  - Physics
  - Thermodynamics
---
Gases, those ubiquitous fluids that surround us, exhibit fascinating properties that can be explained by their underlying microscopic nature. This blog post delves into the world of gases, exploring the equation of state for ideal gases, the kinetic theory of gases, and its connection to pressure, temperature, and specific heat capacities.

### The Perfect Gas Law: Relating Pressure, Volume, and Temperature (PVT Relationship)

The ideal gas law, also known as the combined gas law, relates the pressure (P), volume (V), and temperature (T) of an ideal gas. It's expressed as:

$$
PV = nRT
$$

where:

* n is the number of moles of gas
* R is the universal gas constant (8.314 J/mol⋅K)

This equation allows us to predict the behavior of an ideal gas under various conditions. For instance,

* **Charles' Law:** If the temperature of a gas at constant volume increases, its pressure will also increase proportionally.

$$
P \propto T
$$

* **Boyle's Law:** If the pressure remains constant while the volume increases, the temperature will decrease.

$$
P \propto \frac{1}{V}
$$

### Beyond the Bulk: Work Done in Compressing a Gas

When a gas is compressed in a cylinder by a piston, work is done on the gas. This work can be calculated using the following equation:

$$
W = - \int_{V_i}^{V_f} P dV
$$

where:

* W is the work done (positive for work done by the gas, negative for work done on the gas)
* P is the pressure of the gas
* dV is an infinitesimal change in volume
* V_i is the initial volume of the gas
* V_f is the final volume of the gas

The integral represents the sum of the product of pressure and the infinitesimal change in volume throughout the compression process. If the compression occurs at constant pressure (isobaric process), the equation simplifies to:

$$
W = -P(V_f - V_i)
$$

### Unveiling the Microscopic: The Kinetic Theory of Gases

The kinetic theory of gases provides a microscopic explanation for the macroscopic behavior of gases. It makes the following key assumptions:

1. **Gases consist of a large number of identical, point-like molecules in constant random motion.**
2. **The molecules undergo perfectly elastic collisions with each other and with the walls of the container.**
3. **The average kinetic energy of the gas molecules is directly proportional to the absolute temperature (T) of the gas.**

These simple assumptions lead to a powerful model for understanding the properties of gases.

### From Motion to Pressure: The Kinetic Interpretation of Pressure

Pressure arises from the continual bombardment of the gas molecules on the walls of the container. According to the kinetic theory, pressure (P) can be related to the number of molecules (N), their mass (m), and the average squared speed (v²rms) of the molecules by:

$$
P = \frac{N m v^2_{rms}}{3V}
$$

where V is the volume of the container. This equation shows that pressure increases with the number of molecules, their mass, and the average squared speed of the molecules.

Derivation:

Velocity of a molecule in a container is given by: $\vec{v} = v_x \hat{i} + v_y \hat{j} + v_z \hat{k}$
let distance between two faces of the container be $l$ and area of one face be $A$.
When the molecules collide with 1 face of the container, the velocity component perpendicular to the face is reversed while the parallel component remains unchanged due to the elastic collision. So, $\Delta p = (-mv_x) - (mv_x) = -2mv_x$.
The time between two successive collisions is $\Delta t = \frac{2l}{v_x}$.
Number of molecules colliding with the face in unit time is $n = \frac{v_x}{2l}$.
So, the force exerted by the molecules on the face is $F = n \Delta p = \frac{mv_x^2}{l}$.
As the molecules are colliding with the face in all directions, the total force on the face is $F = \sum \frac{mv_i^2}{l} = \frac{m}{l} \sum v_i^2 = \frac{m}{l} \sum v^2 = \frac{m}{l} N v^2$.
Pressure is given by $P = \frac{F}{A} = \frac{m}{l} N v^2 = \frac{N m v^2}{3V}$.

### Temperature and Speed: The Link Between the Microscopic and Macroscopic

The kinetic theory postulates that the average kinetic energy (KE) of a gas molecule is directly proportional to the absolute temperature (T) of the gas:

$$
KE = \frac{3}{2} k_B T
$$

where k_B is the Boltzmann constant (1.38 x 10^-23 J/K). This equation relates the macroscopic concept of temperature to the microscopic property of the average kinetic energy of the gas molecules. The root-mean-square speed (v²rms) can be obtained from the average kinetic energy using the relationship for kinetic energy of a point mass:

$$
v^2_{rms} = \frac{3kT}{m}
$$

Thus, the root-mean-square speed of the gas molecules increases with temperature.

### Degrees of Freedom and Specific Heat Capacities

The law of equipartition of energy states that, for each degree of freedom of a molecule in a system at thermal equilibrium, the average energy associated with that degree of freedom is equal to (1/2) k_B T.

A degree of freedom refers to an independent way a molecule can store energy through its motion. For a monatomic gas molecule (like helium), there are three degrees of freedom corresponding to its motion along the three axes (x, y, and z). For more complex molecules, additional degrees of freedom can arise due to rotational and vibrational modes.

The law of equipartition of energy allows us to estimate the specific heat capacity of a gas, which is the amount of heat energy required to raise the temperature of 1 gram of a substance by 1 degree Celsius (or 1 mole of a substance by 1 Kelvin).

* **Specific Heat Capacity at Constant Volume (C_v):** This refers to the heat capacity when the volume of the gas is held constant. For a monatomic ideal gas with 3 degrees of freedom, the law of equipartition of energy predicts:

$$
C_v = \frac{3}{2} \left( \frac{R}{n} \right) = \frac{3}{2} k_B
$$

where R/n is the gas constant per mole. This specific heat capacity only accounts for the translational kinetic energy of the gas molecules.

* **Specific Heat Capacity at Constant Pressure (C_p):** This refers to the heat capacity when the pressure of the gas is held constant. For a monatomic ideal gas, the relationship between C_v and C_p is:

$$
C_p = C_v + R
$$

This difference arises because some of the heat energy provided at constant pressure goes into doing work against the expanding gas (the gas pushes back on the surroundings as it expands), in addition to increasing the internal energy of the gas.

For more complex molecules with additional degrees of freedom (rotational and vibrational), the specific heat capacities will be higher, reflecting the additional ways the molecules can store energy.

### The Invisible Path: Mean Free Path

The mean free path (λ) of a gas molecule is the average distance a molecule travels between collisions with other molecules. It depends on the density of the gas (number of molecules per unit volume) and the molecular diameter (d):

$$
λ \propto \frac{1}{n \sqrt{2} \pi d^2}
$$

A denser gas (higher n) or a gas with larger molecules (larger d) will have a shorter mean free path due to more frequent collisions. The concept of mean free path becomes important in understanding phenomena like gas transport (diffusion) and viscosity.

### Unveiling the Numbers: Avogadro's Number

Avogadro's number plays a crucial role in connecting the macroscopic world with the microscopic realm. By combining the ideal gas law with the kinetic theory of gases, we can derive a relationship between pressure, volume, temperature, and Avogadro's number:

$$
PV = N k_B T
$$

where N is the total number of gas molecules (related to the number of moles (n) by N = n N_A). This equation allows us to calculate various properties of a gas if we know some of its other properties and Avogadro's number.

### Beyond the Ideal: Real Gases and Limitations

The kinetic theory of gases provides a powerful framework for understanding ideal gases. However, real gases deviate from ideal behavior at high pressures and low temperatures. These deviations arise due to:

* **Finite size of molecules:** Real gas molecules occupy some volume, unlike point-like particles assumed in the ideal gas model. This becomes significant at high pressures when the available volume becomes comparable to the size of the molecules themselves.
* **Intermolecular forces:** Real gas molecules attract each other with weak intermolecular forces. These forces become important at low temperatures, where the average kinetic energy of the molecules is not sufficient to overcome them completely.

These factors lead to real gases exhibiting slightly different behavior compared to ideal gases, particularly at high pressures and low temperatures.

$$
(P + \frac{a}{V^2})(V - b) = RT
$$

where a and b are constants that account for the finite size of the molecules and the intermolecular forces, respectively. This equation, known as the van der Waals equation of state, provides a more accurate description of the behavior of real gases.

**Compression Factor (Z):** The compression factor is defined as the ratio of the molar volume of a real gas to the molar volume of an ideal gas at the same pressure and temperature:

$$
Z = \frac{V_{real}}{V_{ideal}} = \frac{PV}{RT}
$$

For an ideal gas, Z = 1. For real gases, Z deviates from 1 due to the effects of molecular size and intermolecular forces. The compression factor provides a measure of how much a gas deviates from ideal behavior.

**Real Gas Verification:** The behavior of real gases can be experimentally verified by measuring the compressibility factor Z under different conditions of pressure and temperature. Deviations from ideal behavior can be quantified by comparing the experimental Z values to the ideal gas value of 1. These deviations provide insights into the molecular interactions and properties of the gas.

* **Case 1:** For a real gas, the compressibility factor Z is 1 at high pressures and low temperatures due to attractive intermolecular forces. As $a \approx 0$ and $b \approx 0$, the van der Waals equation simplifies to:

$$
PV = RT \Rightarrow Z = 1
$$

This indicates that the gas behaves like an ideal gas under these conditions.

* **Case 2:** For an ideal gas, the compressibility factor Z is less than 1 at low pressures and high volumes. This is because the ideal gas law assumes point-like particles with no intermolecular forces, leading to a deviation from real gas behavior under these conditions. As $b \approx 0$, the van der Waals equation simplifies to:

$$
PV + \frac{a}{V} = RT \Rightarrow Z + \frac{a}{VRT} = 1 \Rightarrow Z = 1 - \frac{a}{VRT}
$$

This indicates that the compressibility factor Z is less than 1 for an ideal gas at low pressures and high volumes.

* **Case 3:** For a real gas, the compressibility factor Z is greater than 1 at high pressures and low volumes. This is due to the finite size of the gas molecules and the repulsive forces between them. As $a \approx 0$, the van der Waals equation simplifies to:

$$
PV - b = RT \Rightarrow Z - \frac{Pb}{RT} = 1 \Rightarrow Z = 1 + \frac{Pb}{RT}
$$

This indicates that the compressibility factor Z is greater than 1 for a real gas at high pressures and low volumes.

### Andrew's Isotherm

Andrew's Isotherm is about the critical point of a gas. The critical point is the point at which the gas undergoes a phase transition from the gas phase to the liquid phase. The critical point is characterized by the critical temperature, critical pressure, and critical volume of the gas.

$$
V_c = 3b
$$

where V_c is the critical volume of the gas. The critical volume is the volume at which the gas undergoes a phase transition from the gas phase to the liquid phase at the critical temperature and pressure.

$$
P_c = \frac{a}{27b^2}
$$

where P_c is the critical pressure of the gas. The critical pressure is the pressure at which the gas undergoes a phase transition from the gas phase to the liquid phase at the critical temperature and volume.

$$
T_c = \frac{8a}{27bR}
$$

where T_c is the critical temperature of the gas. The critical temperature is the temperature at which the gas undergoes a phase transition from the gas phase to the liquid phase at the critical pressure and volume.

### Different Distribution Functions

The Maxwell-Boltzmann distribution function describes the distribution of speeds of gas molecules in a gas at a given temperature. It is given by:

$$
f(v) = 4 \pi \left( \frac{m}{2 \pi k_B T} \right)^{3/2} v^2 e^{-\frac{mv^2}{2k_B T}}
$$

where, f(v) is the probability density function of the speed v

The Maxwell-Jüttner distribution function describes the distribution of speeds of relativistic particles in a gas at a given temperature. It is given by:

$$
f(v) = 4 \pi \left( \frac{m}{2 \pi k_B T} \right)^{3/2} v^2 e^{-\frac{\sqrt{m^2c^4 + p^2c^2}}{k_B T}}
$$

where, f(v) is the probability density function of the speed v

### A Universe of Gases: Applications and Beyond

The understanding of gases and their properties has numerous applications:

* **Atmospheric Science:**  Knowledge of gas laws and atmospheric pressure is crucial for understanding weather patterns and climate change.
* **Thermodynamics:**  The concepts of pressure, volume, temperature, and work done on gases form the foundation of thermodynamics, a branch of physics that deals with energy transfer and transformations.
* **Internal Combustion Engines:**  The operation of internal combustion engines relies on the controlled compression, ignition, and expansion of gases to generate power.
* **Refrigeration:**  Refrigeration cycles involve the compression and expansion of gases to achieve cooling effects.

The exploration of gases continues to unveil new phenomena and pave the way for technological advancements. From studying the behavior of gases in extreme environments to developing new materials with tailored gas transport properties, the world of gases holds a wealth of knowledge waiting to be discovered.
