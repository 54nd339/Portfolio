---
title: Atoms - The Building Blocks of Matter
description: From Billiard Balls to Quantum Mechanics
date: 2023-02-24
draft: false
slug: /pensieve/physics/atoms
tags:
  - Physics
  - quantum mechanics
---
The world around us, from the towering trees to the tiniest grain of sand, is built upon the fundamental building blocks called atoms. But how did we arrive at our current understanding of these microscopic marvels? This blog post delves into the fascinating journey of atomic theory, exploring the experiments and models that revolutionized our view of matter.

### The Billiard Ball Model: Thomson's Plum Pudding

In the late 19th century, the prevailing atomic model was the **Thomson's plum pudding model**. This model envisioned the atom as a positively charged sphere with negatively charged electrons embedded within it, resembling a plum pudding dessert.

### The Great Reversal: Rutherford's Scattering Experiment

However, this model faced a major challenge in 1909 with the famous **alpha-particle scattering experiment** conducted by Ernest Rutherford. Alpha particles (α) are positively charged and massive particles emitted by some radioactive materials.

**Rutherford's Experiment:**

Rutherford directed a beam of alpha particles at a thin sheet of gold foil. According to the plum pudding model, the positively charged alpha particles would easily pass through the positively charged sphere of the gold atom with minimal deflection.

**Surprising Results:**

Contrary to expectations, Rutherford observed that while most alpha particles passed through the gold foil undeflected, a very small fraction (around 1 in 20,000) experienced significant deflections, some even bouncing back almost directly opposite their initial direction.

**Rutherford's Model:**

These unexpected results led Rutherford to propose a revolutionary **nuclear model** of the atom. He envisioned the atom with a central, massive, positively charged core called the **nucleus**, containing most of the atom's mass. The negatively charged electrons were thought to occupy a much larger space around the nucleus.

### The Quantum Leap: Bohr Model of the Hydrogen Atom

While Rutherford's model explained the scattering experiment, it couldn't explain the stability of atoms. According to classical physics, a moving charged particle like an electron continuously emits electromagnetic radiation, losing energy and eventually spiraling into the nucleus. This contradicted the observed stability of atoms.

In 1913, Niels Bohr proposed a groundbreaking model for the hydrogen atom, the simplest atom with a single proton in the nucleus and a single electron. Bohr's model incorporated the revolutionary idea of **quantization**.

**Bohr's Postulates:**

1. **Stationary Orbits:** Electrons exist in specific allowed energy levels or orbits around the nucleus. These orbits are not continuous; they exist at specific distances from the nucleus.
2. **Quantized Energy Levels:** Electrons in these allowed orbits do not radiate energy and are stable. The energy of an electron in a particular orbit is quantized, meaning it can have only specific discrete values.
3. **Quantum Jumps:** When an electron absorbs energy, it jumps to a higher energy level (outer orbit). Conversely, when it emits energy, it jumps to a lower energy level (inner orbit). The emitted or absorbed energy corresponds to the difference in energy levels between the initial and final orbits.

**Derivation of Orbital Radius:**

Particles travelling with velocity close to speed of light, ($v \approx c$), must be treated using relativistic mass-energy-momentum relation:

$$
E = (m \, c^2) = \frac{m_0 \, c^2}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

where $m_0$ is the rest mass of the electron. This can be written as:

$$
E^2 = (m_0 \, c^2)^2 + (p \, c)^2
$$

where $p$ is the momentum of the electron. For photons as they have no rest mass. The above equation becomes:

$$
E = h\nu = pc \Rightarrow h\frac{c}{\lambda} = pc \Rightarrow \lambda = \frac{h}{p}
$$

As the electrons move in-phase, $2\pi r = n \lambda$ and $p = m_e v_n$. So,

$$
m_e \, v_n \, r_n = \dfrac{n \, h}{2\pi}
$$

The centripetal force acting on the electron is given by the electrostatic force between the electron and the nucleus:

$$
\frac{1}{4\pi\varepsilon_0} \dfrac{e^2}{r_n} = \dfrac{m_e \, v_n^2}{r_n}
$$

where:

- $n$ is the principal quantum number
- $r_n$ is the radius of the nth orbit
- $v_n$ is the velocity of the electron in the nth orbit
- $h$ is Planck's constant ($6.63 \times 10^{-34}$ J·s)
- $e$ is the charge of the electron ($1.6 \times 10^{-19}$ C)
- $m_e$ is the mass of the electron ($9.11 \times 10^{-31}$ kg)
- $\varepsilon_0$ is the permittivity of free space ($8.85 \times 10^{-12}$ C²/N·m²)

The first equation is the quantization of angular momentum, and the second equation is the electrostatic force between the electron and the nucleus. For Stability, the centripetal force must be equal to the electrostatic force:

$$
\dfrac{m_e \, v_n^2}{r_n} = \dfrac{Z}{4\pi\varepsilon_0} \dfrac{e^2}{r_n^2}
$$

$$
r_n = \dfrac{Z \, e^2}{4\pi \, \varepsilon_0 \, m_e \, v_n^2}
$$

Also, from the quantization of angular momentum, we have:

$$
r_n = \dfrac{n \, h}{2\pi \, m_e \, v_n}
$$

Equating both expressions for $r_n$, we get:

$$
\dfrac{Z \, e^2}{4\pi \, \varepsilon_0 \, m_e \, v_n^2} = \dfrac{n \, h}{2\pi \, m_e \, v_n}
$$

Solving for $v_n$:

$$
v_n = \dfrac{Z \, e^2}{2 \, \varepsilon_0 \, n \, h} = \dfrac{1}{4\pi \varepsilon_0} \dfrac{e^2}{\hbar} \dfrac{Z}{n} \approx 2.18 \times 10^6 \, \dfrac{Z}{n} \, m/s
$$

where:

- $Z$ is the atomic number
- $n$ is the principal quantum number
- $\hbar = \dfrac{h}{2\pi}$ is the reduced Planck's constant

Now, substituting the value of $v_n$ in the expression for $r_n$, we get:

$$
r_n = \dfrac{n \, h}{2\pi \, m_e} \dfrac{2 \, \varepsilon_0 \, n \, h}{Z \, e^2} = \dfrac{\varepsilon_0 \, h^2}{\pi \, m_e \, e^2} \dfrac{n^2}{Z} \approx 0.529 \, \dfrac{n^2}{Z} \, \text{Å}
$$

Kinetic energy of the electron in the nth orbit:

$$
K_n = \dfrac{1}{2} m_e \, v_n^2 = \dfrac{1}{2} m_e \dfrac{Z^2 \, e^4}{4 \, \varepsilon_0^2 \, n^2 \, h^2} = \dfrac{m_e \, e^4}{8 \, \varepsilon_0^2 \, h^2} \dfrac{Z^2}{n^2} \approx 13.6 \, \dfrac{Z^2}{n^2} \, \text{eV}
$$

Potential energy of the electron in the nth orbit:

$$
U_n = - \dfrac{1}{4\pi \varepsilon_0} \dfrac{Z \, e^2}{r_n} = - \dfrac{Z \, e^2}{4 \pi \varepsilon_0} \dfrac{\pi \, m_e \, e^2}{\varepsilon_0 \, h^2} \dfrac{Z}{n^2} = \dfrac{m_e \, e^4}{4 \, \varepsilon_0^2 \, h^2} \dfrac{Z^2}{n^2} \approx 27.2 \, \dfrac{Z^2}{n^2} \, \text{eV}
$$

Total energy of the electron in the nth orbit:

$$
E_n = K_n + U_n \approx - 13.6 \, \dfrac{Z^2}{n^2} \, \text{eV}
$$

Time period of the electron in the nth orbit:

$$
t_n = \dfrac{2\pi \, r_n}{v_n} = 2\pi \, \frac{\varepsilon_0 \, h^2}{\pi \, m_e \, e^2} \, \frac{2 \, \varepsilon_0 \, h}{e^2} \frac{n^3}{Z^2} = \dfrac{4 \, \varepsilon_0^2 \, h^3}{m_e \, e^4} \, \frac{n^3}{Z^2} \approx 1.53 \times 10^{-16} \, \dfrac{n^3}{Z^2} \, \text{s}
$$

Frequency of the electron in the nth orbit:

$$
f_n = \dfrac{1}{t_n} = 6.58 \times 10^{15} \, \dfrac{Z^2}{n^3} \, \text{Hz}
$$

Current flowing in the nth orbit:

$$
I_n = e \, f_n = 1.05 \times 10^{-3} \, \dfrac{Z^2}{n^3} \, \text{A}
$$

Magnetic moment of the electron in the nth orbit:

$$
\mu_z = I_n \, A_n = \frac{e}{t_n} \, (\pi \, r_n^2) = e \frac{v_n}{2 \, \pi \, r_n} \, (\pi \, r_n^2) = e \frac{v_n \, r_n \, m_n}{2 \, m_n} = \frac{e \, L_z}{2 \, m_e} = \frac{e \, \hbar}{2 \, m_e} \, n
$$

where $L_z$ is the angular momentum of the electron in the nth orbit.

$$
L_z = m_e \, v_n \, r_n = \dfrac{h r_n}{\lambda_e} = n \hbar
$$

Manetic Field in the nth orbit:

$$
\mu_n = \dfrac{\mu_0 \, I_n}{2 \, r_n} = \dfrac{\mu_0}{2} \dfrac{1.05 \times 10^{-3}}{0.529 \times 10^{-10}} \dfrac{Z^3}{n^5} = 12.47 \, \dfrac{Z^3}{n^5} \, \text{T}
$$

where $\mu_0$ is the permeability of free space ($4\pi \times 10^{-7}$ T·m/A).100

### The Colorful Fingerprint: Hydrogen Line Spectra

One consequence of Bohr's model is the explanation for the observed **hydrogen line spectra**. When an excited hydrogen atom (electron in a higher energy level) transitions back to a lower energy level, it emits a specific wavelength (color) of light corresponding to the energy difference between the levels. This results in a discrete set of emission lines of light, forming the characteristic hydrogen line spectrum. This spectrum acts like a unique fingerprint, identifying hydrogen atoms.

**Emission Lines and Energy Levels:**

The energy difference (ΔE) between the initial (n_i) and final (n_f) energy levels of the electron transition determines the wavelength (λ) of the emitted light according to the following equation:

$$
\Delta E = E_i - E_f = \dfrac{hc}{\lambda}
$$

$$
\frac{1}{\lambda} = \frac{1}{hc} (E_i - E_f) = \dfrac{m_e \, e^4 \, Z^2}{8 \, \varepsilon_0^2 \, h^3 \, c} \left( \dfrac{1}{n_f^2} - \dfrac{1}{n_i^2} \right) = R_H Z^2 \left( \dfrac{1}{n_f^2} - \dfrac{1}{n_i^2} \right)
$$

where $R_H = \dfrac{m_e \, e^4}{8 \, \varepsilon_0^2 \, h^3 \, c} \approx 1.097 \times 10^7 \, \text{m}^{-1}$ is the Rydberg constant for hydrogen. Therefore, Energy can be written in terms of $R_H$ as:

$$
E = -R_H \, h \, c \, \dfrac{Z^2}{n^2}
$$

By calculating the energy differences between various allowed transitions in the hydrogen atom, we can predict the wavelengths of light emitted, which correspond to the observed lines in the hydrogen spectrum.

**Different Series of Hydrogen Spectra:**

The hydrogen spectrum consists of several series of spectral lines, each corresponding to transitions between different energy levels. The most prominent series are:

1. **Lyman Series:** Transitions to the ground state ($n_i = 1$) produce ultraviolet lines. The Lyman series is the most energetic and lies in the ultraviolet region. The first line in this series ($n_f = 2$) is called the Lyman-alpha line. The Lyman series extends to higher energy levels ($n_f \gt 2$), producing shorter-wavelength ultraviolet lines. The Lyman series is named after Theodore Lyman, who studied these transitions. The formula for the Lyman series is:

$$
\frac{1}{\lambda} = R_H \left( \dfrac{1}{1^2} - \dfrac{1}{n^2} \right)
$$

2. **Balmer Series:** Transitions to the first excited state ($n_i = 2$) produce visible lines. The Balmer series is the most familiar and lies in the visible region. The first line in this series ($n_f = 3$) is called the Balmer-alpha line. The Balmer series extends to higher energy levels ($n_f \gt 3$), producing longer-wavelength visible lines. The Balmer series is named after Johann Balmer, who studied these transitions. The formula for the Balmer series is:

$$
\frac{1}{\lambda} = R_H \left( \dfrac{1}{2^2} - \dfrac{1}{n^2} \right)
$$

3. **Paschen Series:** Transitions to the second excited state ($n_i = 3$) produce infrared lines. The Paschen series lies in the infrared region. The first line in this series ($n_f = 4$) is called the Paschen-alpha line. The Paschen series extends to higher energy levels ($n_f \gt 4$), producing longer-wavelength infrared lines. The Paschen series is named after Friedrich Paschen, who studied these transitions. The formula for the Paschen series is:

$$
\frac{1}{\lambda} = R_H \left( \dfrac{1}{3^2} - \dfrac{1}{n^2} \right)
$$

4. **Brackett Series:** Transitions to the third excited state ($n_i = 4$) produce infrared lines. The Brackett series lies in the infrared region. The first line in this series ($n_f = 5$) is called the Brackett-alpha line. The Brackett series extends to higher energy levels ($n_f \gt 5$), producing longer-wavelength infrared lines. The Brackett series is named after Frederick Sumner Brackett, who studied these transitions. The formula for the Brackett series is:

$$
\frac{1}{\lambda} = R_H \left( \dfrac{1}{4^2} - \dfrac{1}{n^2} \right)
$$

5. **Pfund Series:** Transitions to the fourth excited state ($n_i = 5$) produce infrared lines. The Pfund series lies in the infrared region. The first line in this series ($n_f = 6$) is called the Pfund-alpha line. The Pfund series extends to higher energy levels ($n_f \gt 6$), producing longer-wavelength infrared lines. The Pfund series is named after August Herman Pfund, who studied these transitions. The formula for the Pfund series is:

$$
\frac{1}{\lambda} = R_H \left( \dfrac{1}{5^2} - \dfrac{1}{n^2} \right)
$$

**Successes of the Bohr Model:**

- The Bohr model successfully explained the stability of atoms by incorporating quantized energy levels.
- It accurately predicted the energy levels of the hydrogen atom and the wavelengths of light emitted or absorbed during electron transitions.

**Limitations of the Bohr Model:**

- The model was limited to the hydrogen atom and failed to explain the spectra of atoms with more than one electron.

### Into the Nucleus: A World of Protons and Neutrons

While electrons reside in the outer region of the atom, the central core, the nucleus, is a fascinating world of its own. The nucleus is composed of even smaller particles called **protons** and **neutrons**.

Protons carry a positive charge and have a mass of approximately $1.67 \times 10^{-27}$ kg. Neutrons have no charge and a slightly larger mass (around $1.87 \times 10^{-27}$ kg). Together, protons and neutrons are known as **nucleons**. The number of protons in the nucleus determines the element, while the sum of protons and neutrons gives the mass number of the atom.

**The Size of the Nucleus:**

The nucleus is incredibly small compared to the size of the atom. The diameter of a nucleus is typically in the range of $10^{-14}$ to $10^{-15}$ meters, whereas the diameter of an atom can be 10,000 times larger. This means that the nucleus occupies only a tiny fraction of the atom's volume. If the nucleus were the size of a basketball, the atom would be the size of a football stadium! This illustrates the vast empty space within an atom.

$$
R_{avg} = R_0 \, A^{1/3}
$$

where $R_0 = 1.2 \times 10^{-15}$ m is the radius of the nucleus of a hydrogen atom and $A$ is the mass number of the nucleus.

$$
\text{Volume of nucleus} = \dfrac{4}{3} \pi R_{avg}^3 = \dfrac{4}{3} \pi (1.2 \times 10^{-15})^3 A = 4.19 \times 10^{-45} \, \text{A} \, \text{m}^3
$$

**The Strong Nuclear Force:**

Protons and neutrons within the nucleus are held together by a powerful force called the **strong nuclear force**. This force is much stronger than the electromagnetic force that repels like charges (protons) but operates over a very short range. The strong nuclear force plays a crucial role in stabilizing the nucleus and preventing it from disintegrating.

### Nuclear Scattering: Probing the Nucleus

**Nuclear scattering theories** are used to study the interactions between particles and the nucleus. Scattering experiments provide valuable information about the structure and properties of the nucleus. The scattering of alpha particles by a nucleus was instrumental in discovering the structure of the atom. The **Rutherford scattering formula** describes the scattering of alpha particles by a nucleus. The formula predicts the scattering angle of the alpha particles based on the impact parameter and the charge of the nucleus:

$$
\theta = 2 \arctan \left( \dfrac{Z \, e^2}{4 \pi \varepsilon_0 \, K \, p} \right)
$$

where:

- $\theta$ is the scattering angle
- $Z$ is the atomic number of the nucleus
- $e$ is the charge of the electron
- $\varepsilon_0$ is the permittivity of free space
- $K$ is the kinetic energy of the alpha particle
- $p$ is the momentum of the alpha particle

According to Albert Einstein's famous equation **E = mc² (energy equals mass times the speed of light squared)**, mass and energy are equivalent. This principle plays a crucial role in nuclear physics.

**Mass Defect and Binding Energy:**

The mass of an atom is not simply the sum of the individual masses of its protons and neutrons. There's a small difference called the **mass defect ($\Delta m$)**. This mass defect is equivalent to the energy (binding energy, $E_b$) that binds the protons and neutrons together in the nucleus. The binding energy per nucleon ($\frac{E_b}{A}$, where A is the mass number) is a measure of how tightly the nucleons are bound within the nucleus.

$$
E_b = (Z \, m_p + (A - Z) \, m_n - M) \, c^2
$$

$$
\Delta m = Z \, m_p + (A - Z) \, m_n - M
$$

where:

- $Z$ is the number of protons
- $A$ is the mass number
- $m_p$ is the mass of a proton
- $m_n$ is the mass of a neutron
- $M$ is the mass of the nucleus
- $c$ is the speed of light

**Binding Energy Variations:**

The binding energy per nucleon generally increases with increasing mass number (A) up to a certain point, reaching a maximum around iron (A = 56). For heavier nuclei, the binding energy per nucleon starts to decrease. This variation in binding energy has significant implications for nuclear reactions like fission and fusion.

**Nuclear Fission: Splitting the Nucleus**

**Nuclear fission** is a process where a heavy nucleus splits into two smaller nuclei, releasing a tremendous amount of energy. This process typically occurs when a heavy nucleus is bombarded with a neutron. The released neutrons can further induce fission in other heavy nuclei, creating a chain reaction that can be harnessed in nuclear power plants or used in atomic bombs.

**Conditions for Fission:** For fission to occur, the heavy nucleus must be able to overcome the strong nuclear force holding it together. This is why isotopes of certain heavy elements like uranium-235 (U-235) are more susceptible to fission than others.

**Nuclear Fusion: Powering the Stars**

**Nuclear fusion** is the process where two light nuclei combine to form a heavier nucleus, releasing a large amount of energy. This is the process that powers stars like our sun. In the sun's core, immense pressure and temperature cause hydrogen nuclei (protons) to fuse into helium nuclei, releasing tremendous energy in the form of light and heat.

**Challenges of Fusion:** Achieving controlled nuclear fusion on Earth for energy production remains a scientific and technological challenge. The conditions required for fusion (extremely high temperatures and pressures) are difficult to maintain in a controlled manner.

### Radioactivity: Unstable Nuclei and Decay

Some nuclei are unstable and undergo spontaneous transformations to achieve a more stable configuration. This process is known as **radioactivity**. There are three common types of radioactive decay:

1. **Alpha Decay:** In alpha decay, a nucleus emits an alpha particle (a helium nucleus consisting of two protons and two neutrons). This reduces the atomic number by 2 and the mass number by 4.

$$
^{A}_{Z}X \rightarrow ^{A-4}_{Z-2}Y + ^4_2\text{He}
$$

So, the energy released in alpha decay is given by:

$$
Q = \left( m_X - m_Y - m_{\alpha} \right) \, c^2
$$

2. **Beta Decay:** In beta decay, a neutron in the nucleus is transformed into a proton, emitting an electron (beta particle) and an antineutrino. This increases the atomic number by 1 while keeping the mass number constant.

$$
^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + e^- + \bar{\nu}_e
$$

3. **Beta^+ Decay:** In beta^+ decay, a proton in the nucleus is transformed into a neutron, emitting a positron (positive beta particle) and a neutrino. This decreases the atomic number by 1 while keeping the mass number constant.

$$
^{A}_{Z}X \rightarrow ^{A}_{Z-1}Y + e^+ + \nu_e
$$

4. **Electron Capture:** In electron capture, an electron from the inner shell is captured by the nucleus, converting a proton into a neutron and emitting a neutrino.

$$
^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + e^- + \bar{\nu}_e
$$

SO, the energy released in beta decay is given by:

$$
Q = \left( m_X - m_Y - 2 \, m_e \right) \, c^2
$$

5. **Gamma Decay:** In gamma decay, a nucleus in an excited state releases energy in the form of gamma rays (high-energy photons) to transition to a lower energy state. Gamma decay does not change the atomic or mass number.

$$
^{A}_{Z}X^* \rightarrow ^{A}_{Z}X + \gamma
$$

The **half-life** of a radioactive substance is the time taken for half of the radioactive nuclei in a sample to decay. It is a measure of the rate of decay of a radioactive substance. The half-life is a characteristic property of each radioactive isotope.

**Half-Life Equation:**

The number of radioactive nuclei remaining after time t can be expressed as:

$$
\int_{N_0}^{N(t)} dN = -\lambda \, N(t) \, dt
$$

Integrating both sides, we get:

$$
N(t) = N_0 \, e^{-\lambda \, t}
$$

where:

- $N(t)$ is the number of radioactive nuclei at time t
- $N_0$ is the initial number of radioactive nuclei

The **half-life ($T_{1/2}$)** is the time taken for $N(t)$ to reduce to half its initial value ($N_0/2$). So, we have:

$$
\dfrac{N_0}{2} = N_0 \, e^{-\lambda \, T_{1/2}}
$$

Solving for $T_{1/2}$, we get:

$$
T_{1/2} = \dfrac{\ln 2}{\lambda}
$$

Putting the value of $\lambda$ in terms of decay constant, we get:

$$
N = N_0 \, e^{-\dfrac{\ln 2}{T_{1/2}} \, t} = N_0 \left( \dfrac{1}{2} \right)^{\dfrac{t}{T_{1/2}}}
$$

The average life of a radioactive substance is given by:

$$
\tau = \dfrac{1}{\lambda} = \dfrac{T_{1/2}}{\ln 2}
$$

### Conclusion

Our exploration of the atomic universe has unveiled a fascinating world of subatomic particles, energy levels, and the powerful forces that govern their behavior. From the colorful fingerprint of hydrogen spectra to the immense energy harnessed in nuclear reactions, understanding the atom unlocks a deeper appreciation for the universe and the potential it holds.
