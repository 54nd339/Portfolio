---
title: Thermal Properties of Matter - A Symphony of Heat
description: Heat - it’s not just for summer complaints! From why metal burns your fingers to how the sun keeps us alive, this post unravels the secrets of heat transfer, thermal expansion, and blackbody radiation. If you’ve ever wondered why your coffee cools down but the universe heats up—this one’s for you!
date: 2023-02-03
draft: false
slug: /pensieve/physics/heat
tags:
 - Physics
 - Thermodynamics
---
Our world is a constant dance of heat flow, and understanding how matter interacts with thermal energy is crucial in various scientific and engineering fields. This blog delves into the fascinating realm of thermal properties of matter, exploring concepts like heat, temperature, expansion, specific heat, and heat transfer mechanisms.

### The Big Picture: Heat and Temperature

* **Heat (Q):** Heat is the transfer of thermal energy between objects at different temperatures. It flows from a hotter object (higher temperature) to a colder object (lower temperature) until thermal equilibrium is reached (both objects have the same temperature). The SI unit of heat is the Joule (J).
* **Temperature (T):** Temperature is a measure of the hotness or coldness of an object. It is not the same as heat. While heat is the total amount of thermal energy, temperature is a property that indicates the intensity or average kinetic energy of the particles within an object. The Kelvin (K) is the SI unit of temperature, while degrees Celsius (°C) and Fahrenheit (°F) are commonly used scales.

### The Expanding Universe: Thermal Expansion

* **Thermal Expansion:** Most materials expand when heated and contract when cooled. This phenomenon arises due to the increased kinetic energy of particles at higher temperatures, causing them to vibrate with larger amplitudes and occupy more space.

**Quantifying Expansion:**

* **Linear Expansion:** For solids with one dominant dimension (e.g., a rod), the change in length (ΔL) due to a temperature change (ΔT) is:

$$
\Delta L = \alpha \, L_0 \, ΔT
$$

where:

- $\alpha$ is the linear coefficient of thermal expansion (material-specific constant)
- $L_0$ is the original length

Derivation:

$$
\Delta L \propto L_0 \, ΔT
$$

$$
\int_{L_0}^{L_0 + \Delta L} dL = \int_{0}^{ΔT} \alpha \, L_0 \, dT
$$

$$
\Delta L = \alpha \, L_0 \, ΔT
$$

* **Area Expansion:** For thin sheets or membranes, the change in area ($\Delta A$) is:

$$
\Delta A = 2\beta \, A_0 \, ΔT
$$

where:

- $\beta$ is the area coefficient of thermal expansion (typically two times the linear coefficient)
- $A_0$ is the original area (factor of 2 accounts for expansion in both length and width).

* **Volume Expansion:** For three-dimensional objects, the change in volume ($\Delta V$) is:

$$
\Delta V = 3\gamma \, V_0 \, ΔT
$$

where:

- $\gamma$ is the volume coefficient of thermal expansion (typically three times the linear coefficient)
- $V_0$ is the original volume (factor of 3 accounts for expansion in length, width, and height).

**Thermal Expansion of Different States:**

* **Solids:** Solids generally exhibit positive thermal expansion coefficients, meaning they expand with increasing temperature.
* **Liquids:** Most liquids also show positive thermal expansion. However, water exhibits an anomalous behavior between 0°C and 4°C, where it actually contracts upon heating.
* **Gases:** Gases exhibit the most significant thermal expansion. Their volume is highly dependent on temperature, as described by the ideal gas law.

**Strain Energy and Thermal Stress:**

$$
W = \int_{0}^{l} dW = \int_{0}^{l} F \, dl
$$

$$
Y = \frac{\text{stress}}{\text{strain}} = \frac{F/A}{ΔL/L} = \frac{F \, L}{A \, ΔL} \Rightarrow F = \frac{Y \, A}{L}\int_{L}^{L + l} dl = \frac{Y \, A \, l}{L}
$$

$$
W = \int_{0}^{l} \frac{Y \, A \, l}{L} \, dl = \frac{Y \, A}{L} \int_{0}^{\Delta L} l dl = \frac{Y \, A \, L^2}{2L} = \frac{1}{2} \frac{Y \, A \, ΔL}{L} \, ΔL = \frac{1}{2} F \Delta L
$$

$$
\text{Stain Energy} = U = \frac{1}{2} F \Delta L
$$

$$
\frac{dU}{dV} = \frac{F\Delta L}{2AL} = \frac{1}{2}\text{stress} \cdot \text{strain}
$$

$$
U = \frac{1}{2}\text{stress} \cdot \text{strain} \cdot V
$$

### How Much Heat? Specific Heat Capacity

* **Specific Heat Capacity (c):** The specific heat capacity (c) of a material is the amount of heat energy required to raise the temperature of 1 kg of that material by 1 Kelvin (or 1°C for most practical purposes). It is a material-specific property that reflects its ability to store thermal energy. The SI unit of specific heat capacity is J/kg⋅K (or J/kg⋅°C).

**Two Types of Specific Heat:**

* **Specific Heat Capacity at Constant Pressure ($C_p$):** This refers to the heat capacity when the pressure remains constant during the heating process.
* **Specific Heat Capacity at Constant Volume ($C_v$):** This refers to the heat capacity when the volume remains constant during the heating process. For ideal gases, the relationship between $C_p$ and $C_v$ is:

$$
C_p = C_v + R
$$

where R is the gas constant.

**Calorimetry:** The technique of measuring the amount of heat transferred between objects at different temperatures is called calorimetry. By measuring the temperature changes and masses of the involved objects, along with the specific heat capacities of the materials, the amount of heat transfer can be calculated.

**Change of State and Latent Heat**

* **Change of State:** When a substance absorbs or releases heat, it can change its state of matter (e.g., solid to liquid, liquid to gas). This process typically occurs at a specific temperature for a given material, known as the melting point or boiling point.
* **Latent Heat:** The latent heat (L) is the amount of heat energy absorbed or released per unit mass of a substance during a change of state without a change in temperature. There are two types of latent heat:

  * **Latent Heat of Fusion ($L_f$):** The heat energy absorbed during melting (solid to liquid).
  * **Latent Heat of Vaporization ($L_v$):** The heat energy absorbed during vaporization (liquid to gas).

The latent heat values are typically much higher than the specific heat capacities because a significant amount of energy is required to overcome the intermolecular forces holding the particles together during a state change.

**Equations for Heat Transfer during Change of State:**

The amount of heat transfer (Q) during a change of state can be calculated using the following equations:

* **Melting:**

$$
Q = m \, L_f
$$

where m is the mass of the substance undergoing the change of state

* **Vaporization:**

$$
Q = m \, L_v
$$

These equations allow us to determine the amount of heat required to melt or vaporize a specific amount of a substance.

### The Three Modes of Heat Transfer: A Symphony of Exchange

Heat transfer can occur through three primary mechanisms:

* **Conduction:** Conduction is the transfer of heat through direct contact between objects at different temperatures. Heat flows from the hotter object to the colder object through collisions of particles at the microscopic level. The rate of heat conduction depends on the thermal conductivity (k) of the material, which is a measure of its ability to conduct heat. We know the rate of heat transfer is given by:

$$
\frac{\Delta Q}{\Delta t} \propto T_1 - T_2 = \Delta T
$$

$$
\frac{\Delta Q}{\Delta t} \propto A
$$

$$
\frac{\Delta Q}{\Delta t} \propto \frac{1}{d}
$$

where:

- $\Delta T$ is the temperature difference
- A is the cross-sectional area
- d is the thickness of the material

$$
\frac{\Delta Q}{\Delta t} = \frac{k \, A \, \Delta T}{d}
$$

Taking R as thermal resistance:

$$
R = \frac{d}{k \, A}
$$

$$
\frac{\Delta Q}{\Delta t} = \frac{\Delta T}{R}
$$

* **Convection:** Convection is the transfer of heat through the movement of fluids (liquids or gases). Heated fluids tend to expand and rise, creating a circulation pattern that transports heat. This process is crucial for weather patterns and heat transfer in oceans. We know the rate of heat transfer is given by:

$$
\frac{\Delta Q}{\Delta t} \propto T_b - T_s
$$

$$
\frac{\Delta Q}{\Delta t} \propto A
$$

where:

- $T_b$ is the bulk temperature of the fluid
- $T_s$ is the surface temperature of the object

$$
\frac{\Delta Q}{\Delta t} = h \, A \, (T_b - T_s)
$$

where h is the heat transfer coefficient. And the heat transfer is given by:

$$
\Delta Q = m \, S \, dT_b
$$

where m is the mass of the fluid, S is the specific heat capacity, and $\Delta T$ is the temperature difference. So,

$$
m \, S \, \frac{dT_b}{dt} = h \, A \, (T_b - T_s)
$$

$$
\int_{T_1}^T \frac{dT_b}{T_b - T_s} = \frac{h A}{m S} \int dt
$$

$$
ln \left( \frac{T_b - T_s}{T_1 - T_s} \right) = -\frac{h A}{m S} t
$$

$$
T_b - T_s = (T_1 - T_s) \, e^{-\frac{h A}{m S} t}
$$

$$
T_b = T_s + (T_1 - T_s) \, e^{-\frac{h A}{m S} t}
$$

* **Radiation:** Radiation is the transfer of heat through electromagnetic waves. Unlike conduction and convection, radiation does not require a medium and can travel through a vacuum. All objects above absolute zero emit thermal radiation, with the intensity and wavelength distribution depending on the object's temperature. When the radiation hits an object, it can be absorbed, reflected, or transmitted. The rate of heat transfer by radiation is given by Stefan-Boltzmann's law.

**Monochromatic Emmitance**: refers to the emission of electromagnetic radiation at a single, specific wavelength. It's a specific component of radiant emittance, focusing on a narrow band of the spectrum.

$$
e_{\lambda} = \frac{dE_{\lambda}}{dt \, dA \, d\lambda \, \cos(\theta)}
$$

where:

- $e_{\lambda}$ is the monochromatic emittance
- $dE_{\lambda}$ is the energy emitted in the wavelength range $d\lambda$
- $\cos(\theta)$ is the angle between the normal to the surface and the direction of the radiation

**Total Emittance**: refers to the total energy emitted by an object over all wavelengths. It's the sum of the monochromatic emittance over the entire spectrum.

$$
E = \int_{0}^{\infty} e_{\lambda} d\lambda = \frac{dE}{dt \, dA}
$$

**Spectral Energy Density**: refers to the energy emitted per unit area per unit wavelength interval.

$$
u_{\lambda} = \frac{dE_{\lambda}}{dA \, d\lambda}
$$

**Overall Energy Density**: refers to the total energy emitted per unit area over all wavelengths.

$$
u = \int_{0}^{\infty} u_{\lambda} d\lambda = \frac{dE}{dA}
$$

### The Symphony of Heat Exchange: Prevost's Theory and Newton's Law of Cooling

* **Prevost's Theory of Heat Exchange**, also known as the theory of exchanges, is a fundamental concept in the study of thermal radiation. It posits that all bodies continuously emit and absorb radiation, regardless of their temperature. This exchange of radiation occurs between objects at different temperatures until thermal equilibrium is reached.

Key points of Prevost's theory include:

* **Radiation Emission:** All objects above absolute zero emit thermal radiation. The intensity and wavelength distribution of this radiation depend on the object's temperature.
* **Radiation Absorption:** Objects also absorb radiation from their surroundings. The amount of radiation absorbed depends on factors like the object's temperature, surface properties, and the wavelength of the incident radiation.
* **Net Radiation Exchange:** The net heat transfer between two objects is the difference between the radiation emitted and absorbed by each object. This exchange continues until both objects reach the same temperature.

So for normal bodies, Energy emitted is given by:

$$
(\frac{\Delta Q}{\Delta t})_e = \epsilon \, \sigma \, A \, T_b^4
$$

where $\epsilon$ is the emissivity of the body.

Energy absorbed is given by:

$$
(\frac{\Delta Q}{\Delta t})_a = \alpha \, \sigma \, A \, T_s^4
$$

where $\alpha$ is the absorptivity of the body.

Therefore, the net energy emitted is:

$$
(\frac{\Delta Q}{\Delta t})_{net} = (\frac{\Delta Q}{\Delta t})_e - (\frac{\Delta Q}{\Delta t})_a
$$

$$
(\frac{\Delta Q}{\Delta t})_{net} = \epsilon \, \sigma \, A \, T_b^4 - \alpha \, \sigma \, A \, T_s^4
$$

But, by Kirchhoff's Law, $\alpha = \epsilon$. So,

$$
(\frac{\Delta Q}{\Delta t})_{net} = \epsilon \, \sigma \, A \, (T_b^4 - T_s^4)
$$

* **Newton's Law of Cooling:** This law describes the rate of heat transfer between an object and its surroundings due to the temperature difference is proportional to the difference in temperature.

$$
T_b^4 - T_s^4 = (T_b^2 + T_s^2) \, (T_b - T_s) \, (T_b + T_s)
$$

When $T_b \approx T_s$, we can approximate the above equation as:

$$
T_b^4 - T_s^4 = 4 \, T_s^3 \, (T_b - T_s)
$$

Now, substituting this in the Stefan-Boltzmann equation, we get:

$$
(\frac{\Delta Q}{\Delta t})_{net} = 4 \, \epsilon \, \sigma \, A \, T_s^3 \, (T_b - T_s) = - \frac{m \, S \, dT_b}{dt}
$$

$$
- \frac{dT_b}{dt} = \frac{4 \, \epsilon \, \sigma \, A \, T_s^3}{m \, S} \, (T_b - T_s)
$$

$$
- \frac{dT_b}{dt} = k \, (T_b - T_s)
$$

where k is the cooling constant.

Understanding thermal properties of matter is fundamental in various fields like thermodynamics, engineering design, meteorology, and even cooking! From the expansion of bridges to the transfer of heat in engines, these concepts play a crucial role in our everyday lives. By delving deeper into the fascinating world of heat, we gain a greater appreciation for the intricate dance of thermal energy that shapes our universe.

### A Glimpse into the Black Cosmos: Blackbody Radiation and its Laws

* **Blackbody:** A blackbody is a hypothetical ideal object that absorbs all electromagnetic radiation falling on it and emits radiation at all wavelengths. While perfect blackbodies don't exist in reality, real objects often approximate blackbody behavior at specific wavelengths.
* **Blackbody Radiation:** The spectrum of electromagnetic radiation emitted by a blackbody depends on its temperature. The hotter the object, the shorter the peak wavelength of the emitted radiation. This relationship is described by Wien's displacement law:

$$
\Lambda_{max} \propto \frac{1}{T}
$$

$$
\Lambda_{max} = \frac{b}{T}
$$

where:

- $\Lambda_{max}$ is the wavelength at which the emission intensity is maximum
- b is Wien's constant (2.898 x 10^-3 m*K)
- T is the absolute temperature (Kelvin)

* **Stefan-Boltzmann Law:** This law relates the total emitted power (energy per unit time per unit area) by a blackbody to its absolute temperature:

$$
\frac{\Delta Q}{\Delta t} \propto T^4
$$

$$
\frac{\Delta Q}{\Delta t} \propto A
$$

$$
\frac{\Delta Q}{\Delta t} = \sigma \, A \, T^4
$$

where $\sigma$ is the Stefan-Boltzmann constant (5.67 x 10^-8 W/m^2*K^4)

* **Wien's Distribution Law:** The energy density of blackbody radiation in the wavelength range $\lambda$ to $d\lambda$ at given temperature $T$ is given by:

$$
E_\lambda d\lambda = \frac{8\pi h c}{\lambda^5} \frac{d\lambda}{e^{\frac{hc}{\lambda kT}}}
$$

taking $a = 8\pi h c$, and $b = \frac{hc}{k}$, we get:

$$
E_\lambda d\lambda = \frac{a}{\lambda^5 e^{\frac{b}{\lambda T}}} d\lambda
$$

* **Rayleigh-Jeans Law:** This law approximates the blackbody radiation spectrum at long wavelengths (compared to the temperature). However, it fails at short wavelengths, leading to the ultraviolet catastrophe. The Rayleigh-Jeans law is given by:

$$
E_\lambda d\lambda = \frac{8\pi k T}{\lambda^4} d\lambda
$$

* **Planck's Law:** Max Planck introduced a quantum hypothesis to explain the blackbody radiation spectrum accurately. Planck's law combines the Rayleigh-Jeans and Wien's displacement laws to provide a more accurate description of blackbody radiation:

$$
E_\lambda d\lambda = \frac{8\pi h c}{\lambda^5} \frac{d\lambda}{e^{\frac{hc}{\lambda kT}} - 1}
$$

Planck's law successfully resolves the ultraviolet catastrophe and accurately describes the blackbody radiation spectrum across all wavelengths.

### The Symphony's Finale: Exploring Further Connections

The exploration of thermal properties of matter opens doors to a vast and interconnected world of scientific principles. Here are some additional connections to consider:

* **Phase Transitions:** Understanding thermal expansion and latent heat is crucial for studying phase transitions, where materials undergo dramatic changes in properties like structure, density, and electrical conductivity. These transitions are vital in various fields, from materials science (superconductivity) to geology (formation of rocks).
* **[Kinetic Theory of Gases](/pensieve/physics/kinetics):** The ideal gas law, which relates pressure, volume, and temperature of a gas, is built upon the concept of microscopic particles colliding and transferring kinetic energy. This theory connects thermal properties with the behavior of gases at the molecular level.
* **[Thermodynamics and Work](/pensieve/physics/thermodynamics):** The transfer of heat and its relationship to work done by a system are governed by the laws of thermodynamics. Understanding these laws is fundamental in designing efficient heat engines, power plants, and refrigeration systems.
* **Astrophysics:** Thermal radiation from stars provides crucial information about their temperature, composition, and evolution. Blackbody radiation principles are used to analyze stellar spectra and understand the vastness of the cosmos.
* **Climate Change:** The greenhouse effect plays a significant role in regulating Earth's temperature. Understanding how different gases absorb and emit thermal radiation is crucial for studying climate change and its potential impact.

**In conclusion:**

Our exploration of thermal properties has unveiled a symphony of concepts that shape our understanding of the universe, from the microscopic interactions between particles to the grand workings of stars. By continuing to investigate these connections, we gain a deeper appreciation for the intricate dance of heat that governs the world around us.
