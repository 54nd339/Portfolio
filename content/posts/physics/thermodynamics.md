---
title: Thermodynamics
description: Unveiling the Dance of Energy - A Journey Through Thermodynamics
date: 2023-02-07
draft: false
slug: /pensieve/physics/thermodynamics
tags:
  - Physics
  - Thermodynamics
---
The world around us is a constant flow of energy, transforming from one form to another. Thermodynamics is the branch of physics that delves into these energy interactions, equipping us with the tools to understand and predict the behavior of energy in various systems. This blog post embarks on a journey through the core concepts of thermodynamics, exploring temperature, heat, work, and the fundamental laws that govern energy transfer.

### The Foundation: Thermal Equilibrium and Temperature

* **Thermal Equilibrium:**  Two systems are said to be in thermal equilibrium if they can be placed in contact without any net transfer of heat between them. They are at the same temperature. $\text{System A} \leftrightarrow \text{System B}$
* **Temperature:**  Temperature is a fundamental thermodynamic property that quantifies the hotness or coldness of a system. It is measured using various temperature scales, such as Celsius (°C), Fahrenheit (°F), and Kelvin (K). The Kelvin scale is an absolute temperature scale where 0 K represents absolute zero, the point at which all thermal motion ceases.

#### Temperature Scales

* **Celsius (°C):**  The Celsius scale is based on the freezing and boiling points of water, with 0°C as the freezing point and 100°C as the boiling point at standard atmospheric pressure.
* **Fahrenheit (°F):**  The Fahrenheit scale is commonly used in the United States and is based on the freezing and boiling points of water, with 32°F as the freezing point and 212°F as the boiling point at standard atmospheric pressure.
* **Kelvin (K):**  The Kelvin scale is an absolute temperature scale where 0 K represents absolute zero. The Kelvin scale is widely used in scientific applications due to its absolute nature.

The relationship between the Celsius and Kelvin scales is given by: $T(K) = T(°C) + 273.15$
The relationship between the Fahrenheit and Celsius scales is given by: $T(°F) = \frac{9}{5}T(°C) + 32$

### The Zeroth Law: The Basis for Temperature Measurement

The zeroth law of thermodynamics lays the foundation for temperature measurement:

* **Zeroth Law:**  If two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other.

$$
A \leftrightarrow C \quad \text{and} \quad B \leftrightarrow C \quad \Rightarrow \quad A \leftrightarrow B
$$

This law allows us to establish a reference point for temperature and calibrate thermometers. If a thermometer reaches thermal equilibrium with a system, it indicates the system's temperature.

### Energy on the Move: Heat and Work

* **Heat (Q):**  Heat is the transfer of thermal energy between systems due to a temperature difference. It flows from a system at a higher temperature to a system at a lower temperature. The SI unit of heat is the Joule (J).
* **Work (W):**  Work refers to the transfer of energy to or from a system through a macroscopic force acting through a distance. The SI unit of work is also the Joule (J). Positive work signifies energy transferred to the system, while negative work indicates energy transferred out of the system.

It's crucial to distinguish between heat and temperature. Temperature is a property of a system, while heat is the transfer of thermal energy between systems.

### The Internal Energy: The System's Hidden Reservoir

* **Internal Energy (U):**  The internal energy of a system represents the total kinetic and potential energy of its microscopic constituents (atoms and molecules). It depends on the state of the system (such as temperature, pressure, volume) and the type of matter it contains.

### The First Law: The Conservation of Energy

The first law of thermodynamics, states that the total energy of an isolated system remains constant:

$$
Q = \Delta U + W
$$

where:

- Q is the heat transferred to the system (positive when heat is added).
- ΔU is the change in internal energy of the system.
- W is the work done on the system (positive when work is done on the system).

This law implies that any change in the internal energy of a system can be accounted for by heat transfer to or from the system and/or work done on or by the system.

### The Second Law: The Arrow of Time

The second law of thermodynamics introduces the concept of entropy (S), a measure of the randomness or disorder within a system. It dictates the direction of spontaneous processes:

* **Second Law:**  The total entropy of an isolated system always increases over time for spontaneous processes. It remains constant for reversible processes and decreases for non-spontaneous processes.

$$
ΔS_{\text{universe}} = ΔS_{\text{system}} + ΔS_{\text{surr}} > 0
$$

where:

- $ΔS_{\text{universe}}$ is the change in entropy of the universe.
- $ΔS_{\text{system}}$ is the change in entropy of the system.
- $ΔS_{\text{surr}}$ is the change in entropy of the surroundings.

This law implies that systems naturally tend towards increasing disorder. For instance, heat will not spontaneously flow from a colder object to a hotter object. The second law introduces the concept of irreversibility in real processes, as some energy is always dissipated as unusable heat.

### The Third Law: Approaching Absolute Zero

The third law of thermodynamics states that the entropy of a perfect crystal approaches zero as the temperature approaches absolute zero:

* **Third Law:**  The entropy of a perfect crystal at absolute zero is zero. As the temperature approaches absolute zero, the entropy of a system approaches a minimum value. This law provides a reference point for entropy calculations.

$$
S(T=0) = 0
$$

The third law is essential for understanding the behavior of systems at extremely low temperatures, where quantum effects dominate. It also highlights the unattainability of absolute zero in practice.

### Unveiling the Gaseous State: Different Paths, Same Journey

Understanding these core concepts allows us to analyze various processes, particularly those involving the gaseous state of matter. Here, we explore different types of processes based on heat transfer, work interactions, and reversibility:

* **Isothermal Process:**  A process where the temperature of the system remains constant (ΔT = 0). In an ideal gas, this typically involves heat transfer at the same rate as work is done on the system. The internal energy remains constant i.e. $ΔU = 0$. So, $dQ = dW$.

Let's assume a container with gas inside and a lid on top with surface area A. The gas exerts a pressure $P_g$ on the lid, and the lid moves a distance $h$. The work done by the gas on the lid is given by:

$$
W = \int_{h_1}^{h_2} P_g \, dV
$$

where $dV = A \, dh$ is the change in volume of the gas. The work done by the gas is positive when the gas expands (volume increases) and negative when the gas is compressed (volume decreases).

But we know in **Isothermal Process**, $PV = nRT$, where $P$ is the pressure, $V$ is the volume, $n$ is the number of moles of gas, $R$ is the ideal gas constant, and $T$ is the temperature. so, $P = \frac{nRT}{V}$

Substituting this into the work equation, we get:

$$
W = \int_{h_1}^{h_2} \frac{nRT}{V} \, dV
$$

$$
W = nRT \int_{V_1}^{V_2} \frac{1}{V} \, dV
$$

$$
W = nRT \ln \left( \frac{V_2}{V_1} \right)
$$

This equation gives the work done by the gas in an isothermal process. The work done depends on the initial and final volumes of the gas.

* **Isochoric Process:**  A process where the volume of the system remains constant (ΔV = 0). No work is done in an isochoric process, so any heat added to the system increases its internal energy. $Q = ΔU$.
* **Isobaric Process:**  A process where the pressure of the system remains constant (ΔP = 0). The work done in an isobaric process is given by $W = P \, ΔV$, where P is the constant pressure and ΔV is the change in volume. $Q = ΔU + P \, ΔV$.

**Relationship Between Heat Capacities and Ideal Gas Constant**

According to the first law of thermodynamics,

$$
(dQ)_p = dU' + P \, dV
$$

where $(dQ)_p$ is the heat added to the system at constant pressure, $dU'$ is the change in internal energy during isochoric process, and $P \, dV$ is the work done by the system. But, in isochoric process, $dU' = (dQ)_v$ as no work is done. Also P \, dV = nR \, dT$. So, the equation becomes:

$$
(dQ)_p = (dQ)_v + nR \, dT
$$

We can also write this equation as:

$$
R = \frac{1}{n}\frac{(dQ)_p}{dT} - \frac{1}{n}\frac{(dQ)_v}{dT}
$$

We know, the molar heat capacity at constant pressure is given by $C_p = \frac{(dQ)_p}{n \, dT}$ and at constant volume is given by $C_v = \frac{(dQ)_v}{n \, dT}$. So, the equation becomes:

$$
R = C_p - C_v
$$

So in Isochoric Process, $dU = (dQ)_v$
Dividing both sides by $n \, dT$, we get:

$$
\frac{dU}{n \, dT} = \frac{(dQ)_v}{n \, dT}
$$

$$
\frac{dU}{n \, dT} = C_v
$$

So, the internal energy of an ideal gas is given by $U = n \, C_v \, dT$

* **Adiabatic Process:**  A process where no heat transfer occurs between the system and the surroundings (Q = 0). The internal energy change is solely due to the work done on or by the system. Adiabatic processes are often rapid and involve changes in temperature. The entropy of an adiabatic process remains constant. $ΔS = 0$.

In an adiabatic process, $dU + P \, dV = 0$. But, we know $dU = n \, C_v \, dT$ and the ideal gas equation as $PV = nRT$.
Differnetiating the ideal gas equation with respect to $T$, we get $P \, dV + V \, dP = nR \, dT$ which can be written as $dT = \frac{P \, dV + V \, dP}{nR}$. Substituting this into the equation $dU + P \, dV = 0$, we get:

$$
n \, C_v \, dT + P \, dV = 0
$$

$$
n \, C_v \, \frac{P \, dV + V \, dP}{nR} + P \, dV = 0
$$

$$
C_v \, \frac{P \, dV + V \, dP}{R} + P \, dV = 0
$$

$$
(C_v + R) \, P \, dV + C_v \, V \, dP = 0
$$

$$
C_p \, dV + C_v \, V \, dP = 0
$$

$$
\frac{C_p}{C_v} \frac{dV}{V} + \frac{dP}{P} = 0
$$

$$
\gamma \int_{V_1}^{V_2} \frac{dV}{V} + \int_{P_1}^{P_2} \frac{dP}{P} = 0
$$

$$
\gamma \ln \left( \frac{V_2}{V_1} \right) + \ln \left( \frac{P_2}{P_1} \right) = 0
$$

$$
(V_2)^{\gamma} \cdot (P_2) = (V_1)^{\gamma} \cdot (P_1)
$$

$$
P \cdot V^{\gamma} = \text{Constant}
$$

This equation gives the relation between pressure and volume in an adiabatic process. The constant in the equation depends on the initial conditions of the system.

It can be also written as $P^{1-\gamma} \cdot T^{\gamma} = \text{Constant}$ or $T \cdot V^{\gamma - 1} = \text{Constant}$

where $\gamma = \frac{C_p}{C_v}$ is the adiabatic index or heat capacity ratio.

Work done in an adiabatic process is given by:

$$
W = \int_{V_1}^{V_2} P \, dV = \int_{V_1}^{V_2} \frac{A}{V^{\gamma}} \, dV = \frac{A}{1-\gamma} \left( V_2^{1-\gamma} - V_1^{1-\gamma} \right)
$$

But we know, $P \cdot V^{\gamma} = \text{Constant}$, so $P = \frac{A}{V^{\gamma}}$. Substituting this into the work equation, we get:

$$
W = \frac{\left( P_2 \cdot V_2 - P_1 \cdot V_1 \right)}{1-\gamma}
$$

* **Reversible Process:**  A hypothetical process that can be reversed exactly, following the same path in the opposite direction. In a reversible process, there is no net increase in entropy. Reversible processes serve as idealized models for understanding energy interactions.
* **Irreversible Process:**  Most real processes are irreversible due to friction, energy dissipation, and internal rearrangements within the system. These processes lead to an increase in entropy.
* **Cyclic Process:**  A process where the system returns to its initial state after undergoing a series of changes. The first law still applies to cyclic processes, with the total work done equaling the total heat transfer over the entire cycle.

By understanding these different types of processes, we can analyze the behavior of gases under various conditions. For instance, the adiabatic compression of air in a car engine increases its temperature (because no heat transfer occurs, the work done on the gas increases its internal energy, reflected in a rise in temperature).

* **Polytropic Process:**  A process where the pressure and volume of a system are related by the equation $PV^x = \text{Constant}$, where $x$ is a constant (polytropic index). Polytropic processes encompass various types of processes, including isothermal ($x = 1$), isochoric ($x = \infty$), isobaric ($x = 0$), and adiabatic ($x = \gamma$) processes as special cases. Work done in a polytropic process is given by:

$$
W = \frac{P_2 \cdot V_2 - P_1 \cdot V_1}{1 - x} = \frac{nR \Delta T}{1 - x}
$$

Internal energy change in a polytropic process is given by:

$$
\Delta U = \frac{nR \Delta T}{\gamma - 1}
$$

So, $Q = \Delta U + W = nR \Delta T \left( \frac{1}{\gamma - 1} + \frac{1}{1 - x} \right)$

$$
nC_x \Delta T = nR \Delta T \left( \frac{1}{\gamma - 1} + \frac{1}{1 - x} \right)
$$

$$
C_x = R \left( \frac{1}{\gamma - 1} + \frac{1}{1 - x} \right)
$$

$$
C_x = C_v + \frac{R}{1 - x}
$$

### Entropy: The Measure of Disorder

**Entropy (S):**  Entropy is a measure of the disorder or randomness within a system. It quantifies the number of microscopic configurations that correspond to a macroscopic state. The second law of thermodynamics states that the entropy of an isolated system always increases over time for spontaneous processes. Entropy is a key concept in understanding energy transformations and the direction of natural processes.

The entropy change in a system is given by:

$$
\Delta S = \frac{Q}{T}
$$

where:

- $\Delta S$ is the change in entropy.
- Q is the heat added to the system.
- T is the temperature at which the heat transfer occurs.

* **Isothermal Process:**  In an isothermal process, the temperature remains constant, and $dQ = dT$. The entropy change in an isothermal process is given by:

$$
\Delta S = \frac{Q}{T} = \frac{W}{T} = nR \ln \left( \frac{V_2}{V_1} \right)
$$

* **Isochoric Process:**  In an isochoric process, the volume remains constant, and $dQ = dU$. The entropy change in an isochoric process is given by:

$$
\Delta S = \frac{Q}{T} = \frac{C_v \, dT}{T} = C_v \ln \left( \frac{T_2}{T_1} \right) = nR \ln \left( \frac{P_2}{P_1} \right)
$$

* **Isobaric Process:**  In an isobaric process, the pressure remains constant, and $dQ = dU + P \, dV$. The entropy change in an isobaric process is given by:

$$
\Delta S = \frac{Q}{T} = \frac{C_p \, dT}{T} = C_p \ln \left( \frac{T_2}{T_1} \right) = nR \ln \left( \frac{V_2}{V_1} \right)
$$

* **Adiabatic Process:**  In an adiabatic process, no heat transfer occurs, and $Q = 0$. The entropy change in an adiabatic process is zero, as there is no heat added to the system.

$$
\Delta S = 0
$$

* **Ideal Gas Entropy:**  The entropy of an ideal gas is given by:

$$
S = \frac{dU}{T} + \frac{P \, dV}{T} = \int \frac{C_v}{T} \, dT + \int \frac{nR}{V} \, dV
$$

$$
S = nR \ln \left( \frac{V_2}{V_1} \right) + C_v \ln \left( \frac{T_2}{T_1} \right)
$$

$$
S = nR \ln \left( \frac{P_1}{P_2} \right) + C_p \ln \left( \frac{T_2}{T_1} \right)
$$

### Gibbs Free Energy: The Driving Force of Reactions

**Gibbs Free Energy (G):**  Gibbs free energy is a thermodynamic potential that combines enthalpy and entropy to predict whether a reaction will be spontaneous. It is defined as the maximum reversible work that can be done by a system at constant temperature and pressure. The Gibbs free energy change for a reaction is given by:

$$
\Delta G = \Delta H - T \Delta S
$$

where:

- $\Delta G$ is the change in Gibbs free energy.
- $\Delta H$ is the change in enthalpy.
- T is the temperature in Kelvin.
- $\Delta S$ is the change in entropy.

The sign of ΔG determines the spontaneity of a reaction:

* If $\Delta G$ < 0, the reaction is spontaneous (exergonic).
* If $\Delta G$ > 0, the reaction is non-spontaneous (endergonic).
* If $\Delta G$ = 0, the reaction is at equilibrium.

**Relationship Between ΔG and Equilibrium Constant (K):** The Gibbs free energy change is related to the equilibrium constant of a reaction by the equation:

$$
ΔG = -RT \ln K
$$

where:

- R is the ideal gas constant.
- T is the temperature in Kelvin.
- K is the equilibrium constant of the reaction.

We can modify the equation to express the equilibrium constant in terms of ΔH:

$$
ΔG = ΔH - TΔS = -RT \ln K
$$

$$
ΔH - TΔS = -RT \ln K
$$

$$
\frac{ΔH}{T} - ΔS = -R \ln K
$$

$$
\ln K = -\frac{ΔH}{RT} + \frac{ΔS}{R}
$$

$$
\ln \frac{K_1}{K_2} = \frac{ΔH}{R} \left( \frac{1}{T_2} - \frac{1}{T_1} \right)
$$

### Helmholtz Free Energy: The Energy Available for Work

**Helmholtz Free Energy (A):**  Helmholtz free energy is a thermodynamic potential that combines internal energy and entropy to predict the maximum reversible work that can be done by a system at constant temperature and volume. The Helmholtz free energy is given by:

$$
\Delta A = \Delta U - T \Delta S
$$

where:

- A is the Helmholtz free energy.
- U is the internal energy.
- T is the temperature in Kelvin.
- S is the entropy.

The Helmholtz free energy is particularly useful in systems where volume is held constant, such as in chemical reactions at constant volume.

### Equipartition of Energy: The Dance of Molecules

The equipartition theorem is a fundamental concept in statistical mechanics that describes the distribution of energy among the degrees of freedom of a system. It states that each quadratic term in the energy expression contributes $\frac{1}{2} kT$ to the system's energy, where k is the Boltzmann constant and T is the temperature.

For a system with N particles and f degrees of freedom, the total energy is given by:

$$
U = \frac{f}{2} N kT
$$

This theorem provides insights into the energy distribution among the different modes of motion of molecules in a system. It is crucial for understanding the behavior of gases, liquids, and solids at the microscopic level.

| molecule type | deg of freedom                                | $U$              | $C_v$           | $C_p$           | $\gamma$             |
| ------------- | --------------------------------------------- | ------------------ | ----------------- | ----------------- | ---------------------- |
| monatomic     | 3 (transalational)                            | $\frac{3}{2} kT$ | $\frac{3}{2} R$ | $\frac{5}{2} R$ | $\frac{5}{3} = 1.67$ |
| diatomic      | 5 (transalational + rotational)               | $\frac{5}{2} kT$ | $\frac{5}{2} R$ | $\frac{7}{2} R$ | $\frac{7}{5} = 1.4$  |
| polyatomic    | 6 (transalational + rotational + vibrational) | $\frac{6}{2} kT$ | $\frac{6}{2} R$ | $\frac{8}{2} R$ | $\frac{8}{6} = 1.33$ |
| Vibrational   | depends on molecule                           | $\frac{7}{2} kT$ | $\frac{7}{2} R$ | $\frac{9}{2} R$ | $\frac{9}{7} = 1.29$ |

### Case Study: The Carnot Cycle

The Carnot cycle is a theoretical heat engine cycle that operates between two temperature reservoirs, a high-temperature reservoir (TH) and a low-temperature reservoir (TL). It consists of four reversible processes:

1. **Isothermal Expansion:**  The working substance (ideal gas) absorbs heat QH from the high-temperature reservoir at temperature TH and expands isothermally. The gas does work on the surroundings:

$$
W_{\text{expansion}} = Q_H = nRT_H \ln \left( \frac{V_2}{V_1} \right)
$$

2. **Adiabatic Expansion:**  The gas expands adiabatically and does work on the surroundings. No heat is added or removed from the system.

$$
W_{\text{expansion}} = \frac{nR \Delta T}{1 - \gamma}
$$

3. **Isothermal Compression:**  The gas is compressed isothermally, releasing heat QC to the low-temperature reservoir at temperature TL. The gas does work on the surroundings:

$$
W_{\text{compression}} = -Q_C = -nRT_L \ln \left( \frac{V_4}{V_3} \right)
$$

4. **Adiabatic Compression:**  The gas is compressed adiabatically, and work is done on the gas. No heat is added or removed from the system.

$$
W_{\text{compression}} = -\frac{nR \Delta T}{1 - \gamma}
$$

5. **Net Work Done:**  The net work done by the engine is the difference between the work done during expansion and compression. $W_{\text{net}} = W_{\text{expansion}} + W_{\text{compression}}$

$$
W_{\text{net}} = nR \left( T_H \ln \left( \frac{V_2}{V_1} \right) - T_L \ln \left( \frac{V_4}{V_3} \right) \right)
$$

6. **Efficiency:**  The efficiency of the Carnot cycle is given by the ratio of the net work done to the heat absorbed from the high-temperature reservoir.

$$
\eta = \frac{W_{\text{net}}}{Q_H} = 1 - \frac{T_L}{T_H}
$$

(as $TV^{\gamma - 1} = \text{Constant}$)

### Beyond the Basics: Exploring Advanced Concepts

Thermodynamics extends beyond these core concepts, encompassing various applications and advanced topics. Here are a few examples:

* **Heat Engines:** These devices convert heat into usable work, and their efficiency is limited by the Carnot cycle, a theoretical framework based on the second law.
* **Entropy and Information:** The concept of entropy is linked to information theory, where entropy can be interpreted as a measure of missing information about a system's microscopic state.
* **Statistical Mechanics:** This branch of physics bridges the gap between the macroscopic world of thermodynamics and the microscopic world of atoms and molecules, providing a statistical understanding of thermodynamic quantities.

The exploration of thermodynamics continues to unveil new applications and deepen our understanding of energy interactions in complex systems. From power generation to understanding stellar processes, thermodynamics serves as a powerful tool for scientists and engineers across various disciplines.

Refer [Wiki](https://en.wikipedia.org/wiki/Table_of_thermodynamic_equations) for more advanced concepts and equations.
