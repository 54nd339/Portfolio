---
title: Waves - Nature's Way of Keeping Things Groovy!
description: Whether it’s sound, light, or ripples in your coffee, waves are everywhere. This post dives into interference, diffraction, and the Doppler effect—because who doesn’t love a frequency shift? Click in for a wave-riding adventure through the physics of motion and melody!
date: 2023-01-28
draft: false
slug: /pensieve/physics/waves
tags:
  - Physics
  - Classical Mechanics
---
Light, sound, and even water ripples – these seemingly disparate phenomena share a unifying characteristic: they all propagate as waves. This blog post delves into the fascinating world of harmonic waves, exploring the wave equation, the power of superposition, and the intriguing phenomena of interference and diffraction.

### The Song of the Wave: Harmonic Waves and the Wave Equation

Imagine a disturbance traveling through a medium, causing particles to vibrate about their equilibrium positions. This disturbance, if periodic, forms a harmonic wave. The wave can be characterized by several properties:

* **Amplitude (A):** Maximum displacement of a particle from its equilibrium position.
* **Wavelength (λ):** Distance between two consecutive points in the wave with the same phase (crest, trough, etc.).
* **Frequency (f):** Number of wave cycles passing a point per unit time.
* **Period (T):** Time taken for one complete wave cycle ($T = 1/f$).
* **Wave velocity (v):** Speed at which the wave propagates ($v = \lambda f$).

The relationship between these properties is captured by the wave equation. This can be derived from the general wave equation for a one-dimensional progressive wave:

$$
y(x, t) = A \sin(kx - \omega t + \phi)
$$

where k is the wave number ($k = 2\frac{\pi}{\lambda}$), ω is the angular frequency ($\omega = 2\pi f$), and φ is the phase constant. This equation represents a harmonic wave traveling in the positive x-direction with an amplitude A and a phase φ.

Now partial differentiating this equation with respect to x and t, we get:

$$
\frac{\partial y}{\partial x} = -kA \cos(kx - \omega t + \phi)
$$

$$
\frac{\partial y}{\partial t} = \omega A \cos(kx - \omega t + \phi)
$$

Now, differentiating these equations again, we get:

$$
\frac{\partial^2 y}{\partial x^2} = -k^2 A \sin(kx - \omega t + \phi)
$$

$$
\frac{\partial^2 y}{\partial t^2} = -\omega^2 A \sin(kx - \omega t + \phi)
$$

Dividing the second equation by first equation and as we know that $k = \frac{\omega}{v}$, we get:

$$
\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}
$$

Here, y represents the displacement of a particle from its equilibrium position at a specific position (x) and time (t). This second-order partial differential equation describes how the wave propagates through space and time. It is the fundamental equation governing the behavior of harmonic waves.

### Unveiling the Two Faces of Waves: Transverse and Longitudinal

Waves can be classified based on the direction of particle motion relative to the wave propagation:

#### Transverse Waves:

In transverse waves, particles oscillate perpendicular to the direction of wave propagation. Examples include electromagnetic waves and ripples on a water surface.

Consider a rope of mass density $\mu$ and tension T. When a transverse wave travels along the rope, particles move up and down perpendicular to the wave direction. The wave speed (v) in the rope is given by:

$$
v = \sqrt{\frac{T}{\mu}}
$$

This equation highlights the relationship between the tension in the rope, the mass density of the rope, and the speed of the transverse wave.

This can be derived from equating the force due to tension with the force required to accelerate a small segment of the rope.
We know $\int dm = \mu \int dx$ and $\theta = \frac{dx}{dr}$, where $\theta$ is the angle made by the rope with the vertical. So, $\int dm = \mu \int r d\theta$.
Now, the force due to tension is $T \sin \theta$ and the force required to accelerate the small segment is $\int dm \frac{v^2}{r}$. Equating these two forces, we get:

$$
T \sin \theta = \mu r \theta \frac{v^2}{r}
$$

As $\theta$ is very small, $\sin \theta \approx \theta$. So, $T = \mu v^2$ which can be written as:

$$
v = \sqrt{\frac{T}{\mu}}
$$

Energy at mean position, Potential Energy is 0 but Kinetic Energy is maximum.

$$
KE_{max} = \frac{1}{2} m v_p^2 = \frac{1}{2} m A^2 \omega^2
$$

Energy at extreme position, Kinetic Energy is 0 but Potential Energy is maximum.

$$
PE_{max} = \frac{1}{2} k x^2 = \frac{1}{2} m A^2 \omega^2
$$

So,

$$
KE_{avg} = PE_{avg} = \frac{1}{4} m A^2 \omega^2
$$

and, total energy is

$$
E = \frac{1}{2} m A^2 \omega^2 = \frac{1}{2} A^2 \omega^2 \mu dx
$$

Therefore, Power transmitted by the wave is:

$$
P = \frac{dE}{dt} = \frac{1}{2} A^2 \omega^2 \mu \frac{dx}{dt} = \frac{1}{2} A^2 \omega^2 \mu v
$$

Intensity of the wave is:

$$
I = \frac{P}{A} = \frac{1}{2} \omega^2 \mu v
$$

#### Longitudinal Waves:

In longitudinal waves, particles oscillate parallel to the direction of wave propagation.This oscillation creates regions of compression and rarefaction, leading to the propagation of waves through the medium. Sound waves are a classic example of longitudinal waves, where air particles vibrate back and forth along the direction of sound propagation.

The equation of motion for a longitudinal wave in a gas can be derived from the equation of state for an adiabatic process. The speed of sound in a gas is given by:

$$
v = \sqrt{\frac{\gamma P}{\rho}}
$$

where γ is the adiabatic index, P is the pressure, and ρ is the density of the gas. This equation highlights the relationship between the properties of the gas and the speed of sound waves propagating through it.

This can be derived from the equation of state for an adiabatic process, $PV^\gamma = constant$. Differentiating this equation, we get:

$$
\gamma P V^{\gamma - 1} dV + V^{\gamma} dP = 0
$$

$$
\gamma P \frac{dV}{V} + dP = 0
$$

$$
\gamma P = - V \frac{dP}{dV}
$$

We know the Bulk Modulus of a gas is given by $B = - V \frac{dP}{dV}$. So, $\gamma P = B$.

Newton's second law for a small element of gas is:

$$
\frac{\partial P}{\partial x} = \rho \frac{\partial^2 u}{\partial t^2}
$$

where u is the displacement of the element from its equilibrium position. As $dF = dm \frac{d^2 u}{dt^2} \Rightarrow SdP = \rho S dx \frac{d^2 u}{dt^2} \Rightarrow \frac{\partial P}{\partial x} = \rho \frac{\partial^2 u}{\partial t^2}$.

$B$ can be written as $B = \frac{d P}{\frac{du}{dx}}$. So,

$$
\frac{d}{dx} B \frac{du}{dx} = \rho \frac{\partial^2 u}{\partial t^2}
$$

$$
\frac{B}{\rho} \frac{d^2 u}{dx^2} = \frac{\partial^2 u}{\partial t^2}
$$

$$
v^2 = \frac{B}{\rho}
$$

$$
v = \sqrt{\frac{B}{\rho}} = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M_w}}
$$

where $M_w$ is the molecular weight of the gas. As $PV = nRT$.

$dP = B \frac{dy}{dx} = -BAk \cos(kx - \omega t + \phi)$

$P_0 = BAk = BA \frac{\omega}{v}$

$\omega = \frac{P_0 v}{BA}$

$I = \frac{1}{2} \omega^2 \rho v A^2 = \frac{P_0^2 v}{2B}$

### The Art of Overlap: The Principle of Superposition

The principle of superposition states that when two or more waves meet at a specific point, the resulting displacement is the algebraic sum of the individual displacements produced by each wave i.e. $y = \sum_{i=1}^{n} y_i$. This principle is crucial for understanding wave phenomena like interference and beats. Mathematically, the superposition of two waves can be expressed as:

$$
y(x, t) = y_1(x, t) + y_2(x, t)
$$

where y(x, t) is the total displacement at a point (x, t) due to the superposition of two waves $y_1(x, t)$ and $y_2(x, t)$.

### The Bouncing Back Act: Reflection of Waves

When a wave encounters a boundary (a change in medium), part of the wave energy is reflected back into the original medium. The law of reflection states that the angle of incidence ($\theta_i$) is equal to the angle of reflection ($\theta_r$). Reflection can cause a change in sign of the wave depending on the specific boundary conditions.

* **Reflection of Transverse Waves:** When a transverse wave reflects off a fixed end, the reflected wave undergoes a phase change of 180 degrees. This phase change leads to destructive interference between the incident and reflected waves, resulting in a node (zero displacement) at the fixed end.
* **Reflection of Longitudinal Waves:** Longitudinal waves reflect differently based on the boundary conditions. For example, when a longitudinal wave reflects off a fixed end, the reflected wave undergoes a phase change of 0 degrees. This phase relationship leads to constructive interference, creating an antinode (maximum displacement) at the fixed end.

### The Dance of Waves: Interference and Beats

Interference occurs when two or more waves superimpose, leading to the formation of regions of constructive and destructive interference. This phenomenon can be observed in both transverse and longitudinal waves.

From [Coupled Oscillation in Same direction](/pensieve/physics/oscillations), we know that the equation of motion for two coupled oscillators is:

$$
A_1 + A_2 \cos(\phi) = R \cos(\theta)
$$

$$
A_2 \sin(\phi) = R \sin(\theta)
$$

* **Constructive Interference:** When two waves are in phase (crests align with crests and troughs align with troughs), they reinforce each other, leading to constructive interference. This results in a region of maximum displacement or intensity.

For $R = A_1 + A_2$, $\cos(\phi)$ should be 1. So, $\phi = 2n\pi$.

$$
k \Delta x = \frac{2\pi}{\lambda} \Delta x = 2n\pi
$$

$$
\Delta x = n \lambda
$$

* **Destructive Interference:** When two waves are out of phase (crests align with troughs), they partially or completely cancel each other out, leading to destructive interference. This results in a region of minimum displacement or intensity.

For $R = A_1 - A_2$, $\cos(\phi)$ should be -1. So, $\phi = (2n + 1)\pi$.

$$
k \Delta x = \frac{2\pi}{\lambda} \Delta x = (2n + 1)\pi
$$

$$
\Delta x = \left(n + \frac{1}{2}\right) \lambda
$$

#### Interference of Light Waves:

**Huygen Principle:** Every point on a wavefront acts as a source of secondary wavelets that spread out in all directions at the speed of light.

**Conditions:**

- for Sustained Interference:
  - The sources must be coherent (constant phase difference).
  - The sources must have the same frequency and amplitude. So, the sources must be monochromatic.
  - Polarization of the sources must be the same.
- For Observing Interference:
  - The sources must be close to each other.
  - The distance between the sources and the screen must be large.
- For Good Contrast:
  - The sources must be narrow.
  - The sources must be of equal amplitude.

**Types of Interference of light waves:**

1. **Division of Amplitude** of incident beam into two or more parts, either by partial reflection or refraction, which traverse different paths and are finally brought together to produce interference. Examples: Interference in thin films, Newton’s rings, Michelson’s interferometer.
2. **Division of Wavefront** by employing mirrors, biprisms, or lenses. It requires a point source or narrow slit source. Examples: Young’s double-slit experiment, Lloyd’s mirror, Fresnel biprism.

### The Rhythmic Heartbeat: Beats

Beats are a fascinating phenomenon that occurs when two waves of slightly different frequencies overlap. The superposition of these waves leads to a periodic variation in amplitude known as beats. The beat frequency (f_beat) is the difference between the frequencies of the two waves:

$$
f_{beat} = |f_1 - f_2|
$$

The beat frequency is the frequency at which the amplitude of the superimposed waves oscillates. This phenomenon is commonly observed in music and acoustics, where the interference of slightly detuned notes creates a distinctive pulsating sound.

### Diffraction: The Bending of Waves

Diffraction is the slight bending of light into the geometrical shadow region, when passing through a narrow slit, comparable to the wavelength of light. It results from the interference between waves from the same source.

$$
\sin \theta = \frac{m \lambda}{a}
$$

where m is the order of the maximum, λ is the wavelength of light, and a is the width of the slit.

1. **Freshnel Diffraction:** It occurs when the source and the screen are at a finite distance from the aperture. It is characterized by the presence of both the central maximum and the secondary maxima and minima.
2. **Fraunhofer Diffraction:** It occurs when the source and the screen are at an infinite distance from the aperture. It is characterized by the presence of only the central maximum and the secondary maxima.

The intensity of the diffracted light depends on the size of the aperture, the wavelength of light, and the distance between the aperture and the screen. Diffraction plays a crucial role in understanding the behavior of light and other waves in various physical systems.

### Polarization: The Directional Dance of Waves

Polarization refers to the orientation of the electric field vector of a wave. When a wave is polarized, the electric field oscillates in a specific direction, perpendicular to the direction of wave propagation. Polarization can be linear, circular, or elliptical, depending on the orientation of the electric field vector.

$$
\vec{E} = E_{0x} \cos(kx - \omega t + \phi) \hat{i} + E_{0y} \cos(kx - \omega t + \phi + \delta) \hat{j}
$$

where $\delta$ is the phase difference between the two waves.

* **Linear Polarization:** In linearly polarized light, the electric field oscillates in a single plane. This can be achieved by passing unpolarized light through a polarizer, which allows only light waves oscillating in a specific direction to pass through.
* **Circular Polarization:** In circularly polarized light, the electric field vector rotates in a circular pattern as the wave propagates. This can be achieved by superimposing two linearly polarized waves with a phase difference of 90 degrees.
* **Elliptical Polarization:** In elliptically polarized light, the electric field vector traces an elliptical path as the wave propagates. This can be achieved by superimposing two linearly polarized waves with different amplitudes and phase differences.

Polarization is a fundamental property of light and other electromagnetic waves, with applications in optical devices, communication systems, and material analysis.

### The Symphony of Waves: Standing Waves and Resonance

Standing waves are a unique type of wave pattern that forms when a wave reflects back on itself, creating specific points of maximum and zero displacement. These points, known as antinodes and nodes, remain stationary over time. Standing waves are crucial in understanding resonance and the behavior of musical instruments. The key properties of standing waves include:

* **Nodes:** Points of zero displacement where the wave amplitude is always zero.
* **Antinodes:** Points of maximum displacement where the wave amplitude is at its maximum.

Standing waves are formed when a progressive wave traveling in one direction interferes with its reflected wave traveling in the opposite direction. The superposition of these waves can create specific points of maximum displacement (antinodes) and zero displacement (nodes) that remain stationary over time.

* **Standing Waves in Strings:** When a string is fixed at both ends and set into vibration, standing waves can be established. The possible wavelengths (λ) for standing waves in a string of length (L) are given by:

$$
\lambda_n = \frac{2L}{n}
$$

where n is an integer representing the harmonic mode (n = 1 corresponds to the fundamental mode, and higher values of n correspond to overtones or harmonics).

* **Standing Waves in Organ Pipes:** Organ pipes can also support standing waves, with different pipe geometries leading to different types of waves. Open pipes have an antinode at both ends, while closed pipes have a node at one end and an antinode at the other. The possible wavelengths for standing waves in an open pipe of length (L) are:

$$
\lambda_n = \frac{4L}{n}
$$

and for a closed pipe:

$$
\lambda_n = \frac{4L}{2n - 1}
$$

### Doppler Effect: The Shifting Tune of Waves

The Doppler effect describes the change in frequency of a wave due to the relative motion between the source of the wave and the observer. This effect is commonly observed in sound waves, where the pitch of a sound appears to change as the source moves towards or away from the observer. The Doppler effect can be expressed as:

$$
f' = f \left(\frac{v \pm v_o}{v \pm v_s}\right)
$$

where f' is the observed frequency, f is the source frequency, v is the wave velocity, $v_0$ is the observer's velocity, and $v_s$ is the source's velocity. The plus sign is used when the source and observer are moving towards each other, and the minus sign is used when they are moving away from each other. The Doppler effect has applications in various fields, including astronomy, medical diagnostics, and traffic monitoring. It is a fundamental concept in understanding the behavior of waves in motion.

### Conclusion

The world of waves encompasses a vast array of phenomena. From the beauty of interference patterns to the power of diffraction gratings in unraveling the secrets of light, understanding these concepts allows us to appreciate the intricate dance of waves in our universe. The equations and concepts explored in this blog post provide a foundation for further delving into these fascinating topics.
