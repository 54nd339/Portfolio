---
title: Current Electricity - The Shocking Truths!
description: Shocking truths about electricity! Ever wondered how tiny charged particles power your gadgets, light up cities, and even cook your food? This post unplugs the mysteries of current, resistance, and Ohm’s Law—making you an electrifying genius (minus the frizz). Get amped up and dive into the world of flowing charges!
date: 2023-02-19
draft: false
slug: /pensieve/physics/current
tags:
  - Physics
  - Electromagnetism
---
Electric current is the flow of electric charge through a conductor. It is measured in Amperes (A), where 1 A is equivalent to 1 C/s. Current flows from a region of high potential to a region of low potential, driven by the electric field.

$$
I = \dfrac{Q}{t}
$$

where I is the current, Q is the charge, and t is the time taken for the charge to flow.

**Drift Velocity:** Drift velocity ($v_d$) is the average velocity of charge carriers in a conductor due to an applied electric field. It is a small fraction of the speed of light and depends on the charge carrier density, charge, and mass of the charge carriers.

$$
v_d = \dfrac{1}{2} \dfrac{q \vec{E}}{m_e} t
$$

where $q$ is the charge of the carrier, $\vec{E}$ is the electric field, $m_e$ is the mass of the charge carrier, and t is the relaxation time.

Force on a charge in an electric field is given by:

$$
F = q \vec{E} = m_e \vec{a}
$$

where $m_e$ is the mass of the charge carrier and $\vec{a}$ is the acceleration. So, acceleration is given by:

$$
\vec{a} = \dfrac{q \vec{E}}{m_e}
$$

Distance travelled by the charge carrier between collisions is given by:

$$
S = \dfrac{1}{2} \vec{a} t^2 = \dfrac{1}{2} \dfrac{q \vec{E}}{m_e} t^2
$$

So, the drift velocity is given by:

$$
v_d = \dfrac{dS}{dt} = \dfrac{q \vec{E}}{m_e} t
$$

$$
I = \dfrac{Q}{t} = \dfrac{Q}{S / v_d} = \dfrac{nqv_d}{S}
$$

**Current Density:** Current density ($\vec{J}$) is a vector quantity that describes the flow of current through a conductor. It is defined as the current per unit area and points in the direction of current flow. The current density is related to the electric field and the conductivity of the material.

$$
\vec{J} = \dfrac{I}{A} = \sigma \vec{E}
$$

where $\sigma$ is the conductivity of the material and $\vec{E}$ is the electric field. This can be derived from the drift velocity equation.

$$
\vec{J} = \dfrac{nq}{SA}\vec{v_d} = \dfrac{nq}{SA} \dfrac{q \vec{E}}{m_e} t = \dfrac{nq^2}{m_eSA} \vec{E} t
$$

Therefore, $\sigma$ can be defined as:

$$
\sigma = \dfrac{nq^2}{m_eSA} t
$$

**Ohm's Law:** Ohm's Law describes the relationship between current, voltage, and resistance in a circuit. It states that the current flowing through a conductor is directly proportional to the voltage across the conductor and inversely proportional to the resistance of the conductor:

$$
I = \dfrac{V}{R}
$$

Ohm's Law is used to calculate the current flowing through a circuit and the voltage drop across a resistor. It can be derived from the current density equation.

$$
I = \int \vec{J} \cdot d\vec{A} = \int \sigma \dfrac{(\vec{E} \cdot dl)}{dl} \cdot d\vec{A} = \sigma V \dfrac{d\vec{A}}{dl}
$$

**Resistance and Resistivity:** Resistance (R) is a measure of how much a material opposes the flow of current. It is measured in Ohms ($\Omega$), where 1 $\Omega$ is equivalent to 1 V/A. Resistance depends on the material, length, and cross-sectional area of the conductor.

$$
R = \dfrac{1}{\sigma} \dfrac{L}{A} = \rho \dfrac{L}{A}
$$

where $\sigma$ is the conductivity, $\rho$ is the resistivity, L is the length of the conductor, and A is the cross-sectional area of the conductor. Resistivity is a material property that describes how well a material conducts electricity.

**Temperature Dependence of Resistance:** The resistance of a material changes with temperature due to the thermal motion of the atoms. In most materials, the resistance increases with temperature, following the equation:

$$
R = R_0 (1 + \alpha \Delta T)
$$

where $R$ is the resistance at temperature $T$, $R_0$ is the resistance at a reference temperature, $\alpha$ is the temperature coefficient of resistance, and $\Delta T$ is the change in temperature.

**Power in Electric Circuits:** The power dissipated in an electric circuit is the rate at which energy is converted to heat. It is given by:

$$
P = \dfrac{W}{t} = \dfrac{QV}{t} = IV = I^2 R = \dfrac{V^2}{R}
$$

where $P$ is the power, $I$ is the current, $V$ is the voltage, and $R$ is the resistance. Power is measured in Watts (W), where 1 W is equivalent to 1 J/s.

**Series and Parallel Resistors:** Resistors can be connected in series or parallel to achieve different resistance values and power dissipation capabilities. In series, the total resistance is the sum of the individual resistances, while in parallel, the total resistance is less than the smallest individual resistance.

In series, the total resistance is given by:

$$
R_{eq} = R_1 + R_2 + \ldots + R_n
$$

As the current is same in series, the voltage is divided among the resistors.

$$
V = V_1 + V_2 + \ldots + V_n
$$

$$
I = I_1 = I_2 = \ldots = I_n
$$

$$
V = IR_{eq} = I(R_1 + R_2 + \ldots + R_n)
$$

$$
R_{eq} = R_1 + R_2 + \ldots + R_n
$$

In parallel, the total resistance is given by:

$$
\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \ldots + \dfrac{1}{R_n}
$$

As the voltage is same in parallel, the current is divided among the resistors.

$$
I = I_1 + I_2 + \ldots + I_n
$$

$$
V = V_1 = V_2 = \ldots = V_n
$$

$$
I = \dfrac{V}{R_{eq}} = V(\dfrac{1}{R_1} + \dfrac{1}{R_2} + \ldots + \dfrac{1}{R_n})
$$

$$
\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \ldots + \dfrac{1}{R_n}
$$

**Applications of Current and Resistance:** Current and resistance are fundamental concepts in electrical engineering and physics. They are used in various applications, such as circuit design, power distribution, and electronic devices. Understanding current and resistance is essential for analyzing and designing electrical systems.

### Direct Current Circuits

Direct current (DC) circuits are circuits that contain a constant voltage source and resistors. They are used in various applications, such as power supplies, lighting, and electronic devices. DC circuits are analyzed using Kirchhoff's laws and Ohm's Law to determine the current, voltage, and power in the circuit.

**Kirchhoff's Laws:** Kirchhoff's laws are two fundamental laws used to analyze electrical circuits:

1. Kirchhoff's current law (KCL) states that the sum of currents entering a node is equal to the sum of currents leaving the node.

$$
\sum I_{\text{in}} = \sum I_{\text{out}}
$$

2. Kirchhoff's voltage law (KVL) states that the sum of voltages around a closed loop in a circuit is zero.

$$
\sum V_{\text{loop}} = 0
$$

**Node Analysis:** Node analysis is a method used to analyze electrical circuits by applying Kirchhoff's current law at each node in the circuit. By writing current balance equations at each node, the currents in the circuit can be determined.

**Mesh Analysis:** Mesh analysis is a method used to analyze electrical circuits by applying Kirchhoff's voltage law around each loop in the circuit. By writing voltage balance equations around each loop, the voltages in the circuit can be determined.

**Thevenin's Theorem:** Thevenin's theorem states that any linear electrical circuit can be replaced by an equivalent circuit consisting of a voltage source and a resistor. The Thevenin equivalent circuit simplifies circuit analysis by reducing complex circuits to simpler equivalent circuits.

$$
V_{\text{th}} = V_{\text{oc}}
$$

$$
R_{\text{th}} = R_{\text{eq}}
$$

where $V_{\text{th}}$ is the Thevenin voltage, $V_{\text{oc}}$ is the open-circuit voltage, $R_{\text{th}}$ is the Thevenin resistance, and $R_{\text{eq}}$ is the equivalent resistance.

**Norton's Theorem:** Norton's theorem states that any linear electrical circuit can be replaced by an equivalent circuit consisting of a current source and a resistor. The Norton equivalent circuit simplifies circuit analysis by reducing complex circuits to simpler equivalent circuits.

$$
I_{\text{N}} = I_{\text{sc}}
$$

$$
R_{\text{N}} = R_{\text{eq}}
$$

where $I_{\text{N}}$ is the Norton current, $I_{\text{sc}}$ is the short-circuit current, $R_{\text{N}}$ is the Norton resistance, and $R_{\text{eq}}$ is the equivalent resistance.

**Superposition Theorem:** The superposition theorem states that the total current or voltage in a circuit is the sum of the currents or voltages due to each individual source acting alone. By analyzing the circuit with each source separately, the total response of the circuit can be determined.

$$
I_{\text{total}} = I_1 + I_2 + \ldots + I_n
$$

**Applications of DC Circuits:** DC circuits are used in various applications, such as power supplies, lighting, electronic devices, and control systems. Understanding DC circuits is essential for designing and analyzing electrical systems and devices.

Alternating current (AC) is an electric current that periodically reverses direction. It is characterized by a sinusoidal waveform and is commonly used in electrical power transmission and distribution systems. The frequency of AC is measured in hertz (Hz) and is typically 50 or 60 Hz in most countries.

### Alternating Current Circuits

Alternating current (AC) is a type of electrical current that changes direction periodically. AC circuits contain time-varying voltage sources that produce sinusoidal voltage and current waveforms. The frequency of the AC signal is the number of cycles per second and is measured in Hertz (Hz).

**Sinusoidal Waveforms:** Sinusoidal waveforms are periodic functions that oscillate between positive and negative values. The sinusoidal waveform is characterized by its amplitude, frequency, and phase. Sinusoidal waveforms are used to represent AC voltage and current in electrical circuits.

$$
V(t) = V_0 \sin(\omega t + \phi)
$$

where $V(t)$ is the voltage at time t, $V_0$ is the amplitude of the voltage, $\omega$ is the angular frequency, $t$ is the time, and $\phi$ is the phase angle.

- **Angular Frequency:** The angular frequency ($\omega$) of an AC signal is the rate at which the signal oscillates and is related to the frequency by:

$$
\omega = 2\pi f
$$

where $f$ is the frequency of the signal in Hertz.

- **Phase Angle:** The phase angle ($\phi$) of an AC signal is the offset of the waveform from a reference point. It represents the time shift of the waveform relative to a reference waveform.

**RMS Voltage and Current:** The root mean square (RMS) voltage and current are measures of the effective value of the AC signal. The RMS value is the equivalent DC value that produces the same power dissipation in a resistor as the AC signal.

$$
V_{\text{rms}} = \sqrt{\dfrac{1}{T} \int_0^T V^2(t) dt}
$$

$$
V_{\text{rms}} = \sqrt{\dfrac{1}{T} \int_0^T V_0^2 \sin^2(\omega t + \phi) dt}
$$

For simplicity, we can take $\phi = 0$. And, $\sin^2(\omega t)$ can be written as $\dfrac{1 - \cos(2\omega t)}{2}$.

$$
V_{\text{rms}} = V_0 \sqrt{\dfrac{1}{T} \int_0^T \dfrac{1 - \cos(2\omega t)}{2} dt}
$$

$$
V_{\text{rms}} = V_0 \sqrt{\dfrac{1}{T} [\dfrac{t}{2} - \dfrac{\sin(2\omega t)}{4\omega}] \Big|_0^T}
$$

$$
V_{\text{rms}} = V_0 \sqrt{\dfrac{1}{T} [\dfrac{T}{2} - \dfrac{\sin(2\omega T)}{4\omega}]}
$$

$$
V_{\text{rms}} = V_0 \sqrt{\dfrac{1}{2} - \dfrac{\sin(2\omega T)}{4\omega T}}
$$

$$
V_{\text{rms}} = V_0 \sqrt{\dfrac{1}{2}} = \dfrac{V_0}{\sqrt{2}}
$$

**Mean Voltage and Current:** The mean voltage and current of an AC signal are the average values of the signal over one cycle. The mean value of a sinusoidal waveform is zero, as the positive and negative values cancel out over one cycle.

$$
V_{\text{mean}} = \dfrac{1}{T} \int_0^T V(t) dt = 0
$$

$$
V_{\text{mean}} = \dfrac{1}{T} \int_0^T V_0 \sin(\omega t) dt = 0
$$

$$
V_{\text{mean}} = \dfrac{1}{T} [-\dfrac{V_0}{\omega} \cos(\omega t)] \Big|_0^T
$$

$$
V_{\text{mean}} = \dfrac{V_0}{\omega T} [1 - \cos(\omega T)]
$$

For a half cycle, $T = \dfrac{\pi}{\omega}$.

$$
V_{\text{mean}} = \dfrac{V_0}{\pi} [1 - \cos(\pi)] = 2\dfrac{V_0}{\pi}
$$

For a full cycle, $T = \dfrac{2\pi}{\omega}$.

$$
V_{\text{mean}} = \dfrac{V_0}{2\pi} [1 - \cos(2\pi)] = 0
$$

**Impedance:** Impedance is a measure of how a circuit opposes the flow of AC current. It is a complex quantity that includes resistance, capacitance, and inductance. Impedance is used to calculate the current and voltage in AC circuits.

$$
Z = R + jX
$$

where $Z$ is the impedance, $R$ is the resistance, $X$ is the reactance, and $j$ is the imaginary unit. The impedance of a resistor is purely real, while the impedance of a capacitor or inductor is purely imaginary.

**Reactance:** Reactance is the imaginary part of impedance that arises from the capacitive or inductive elements in a circuit. Capacitive reactance ($X_C$) is related to the capacitance of the circuit, while inductive reactance ($X_L$) is related to the inductance of the circuit.

$$
X_C = -\dfrac{1}{\omega C}
$$

$$
X_L = \omega L
$$

where $\omega$ is the angular frequency, C is the capacitance, and L is the inductance.

**Admittance:** Admittance is the reciprocal of impedance and is a measure of how easily a circuit allows the flow of AC current. It is used to calculate the current and voltage in AC circuits.

$$
Y = \dfrac{1}{Z} = \dfrac{1}{R + jX} = G + jB
$$

where $Y$ is the admittance, $G$ is the conductance, $B$ is the susceptance, and $j$ is the imaginary unit. The conductance of a resistor is the reciprocal of the resistance, while the susceptance of a capacitor or inductor is the reciprocal of the reactance.

**Phasors:** Phasors are complex numbers that represent sinusoidal signals in AC circuits. Phasors have a magnitude and phase angle that correspond to the amplitude and phase of the sinusoidal signal. Phasor analysis simplifies the analysis of AC circuits by converting time-varying quantities into algebraic quantities.

**Phasor Analysis:** Phasor analysis is a method used to analyze AC circuits by representing time-varying quantities as complex numbers called phasors. Phasors simplify the analysis of AC circuits by converting sinusoidal signals into algebraic quantities.

**Power in AC Circuits:** The power in AC circuits is the rate at which energy is converted to heat or work. In AC circuits, power is calculated using the complex power formula:

$$
S = VI^* = I^2 Z = V^2 \bar{Y}
$$

where S is the complex power, V is the voltage, I is the current, Z is the impedance, and Y is the admittance. The real part of the complex power is the active power (P), while the imaginary part is the reactive power (Q).

**Power Factor:** The power factor is a measure of how effectively a circuit converts electrical power into useful work. It is defined as the ratio of the active power to the apparent power:

$$
\text{Power Factor} = \dfrac{P}{S} = \cos \phi
$$

where P is the active power, S is the apparent power, and $\phi$ is the phase angle between the voltage and current.

**Resonance:** Resonance is a phenomenon that occurs in AC circuits when the capacitive and inductive reactances cancel each other out, resulting in a minimum impedance. At resonance, the circuit is most efficient at transferring power from the source to the load.

$$
X_C = X_L
$$

$$
\omega L = \dfrac{1}{\omega C}
$$

$$
\omega = \dfrac{1}{\sqrt{LC}}
$$

where $\omega$ is the resonant frequency, $L$ is the inductance, and $C$ is the capacitance.

**Q Factor:** The $Q$ factor is a measure of the quality of a resonant circuit. It is defined as the ratio of the reactance to the resistance in the circuit:

$$
Q = \dfrac{X}{R}
$$

where $X$ is the reactance and $R$ is the resistance. The $Q$ factor describes the sharpness of the resonance peak in the frequency response of the circuit.

**Bandwidth:** The bandwidth of a resonant circuit is the range of frequencies over which the circuit is resonant. It is defined as the difference between the upper and lower cutoff frequencies of the circuit.

$$
\text{Bandwidth} = f_{\text{upper}} - f_{\text{lower}}
$$

where $f_{\text{upper}}$ is the upper cutoff frequency and $f_{\text{lower}}$ is the lower cutoff frequency.

**Applications of AC Circuits:** AC circuits are used in various applications, such as power distribution, motors, transformers, and electronic devices. Understanding AC circuits is essential for designing and analyzing electrical systems and devices.
