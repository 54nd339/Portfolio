---
title: Oscillation - The Rhythmic Dance of the Universe
description: From swinging pendulums to guitar strings and even atoms jiggling, everything moves in waves. This post unpacks the science of vibrations, resonance, and why things sometimes shake themselves apart. If you’ve ever wondered why bridges wobble or clocks tick—this is your kind of motion!
date: 2023-01-26
draft: false
slug: /pensieve/physics/oscillations
tags:
  - Physics
  - Classical Mechanics
---
The world around us is full of vibrations. From the rhythmic hum of a tuning fork to the majestic dance of planets in their orbits, oscillatory motion plays a fundamental role in physics. This blog post delves into the fascinating world of harmonic oscillations, exploring different types, energy transfer, and fascinating phenomena like resonance.

### The Simplest Harmony: Simple Harmonic Motion (SHM)

Imagine a mass attached to a spring. When you pull the mass away from its equilibrium position and release it, the spring exerts a restoring force proportional to the displacement, bringing the mass back. This back-and-forth motion is a classic example of Simple Harmonic Motion (SHM).

Mathematically, the restoring force, F, is described by Hooke's Law:

$$
F = -k x
$$

Here, k is the spring constant (a measure of stiffness) and x is the displacement from the equilibrium position. The negative sign indicates the force acts opposite to the displacement.

The equation of motion for SHM can be derived using Newton's second law:

$$
m \ddot{x} = -kx
$$

where m is the mass and $\ddot{x}$ (second derivative of x) represents acceleration. The solution can be expressed as:

$$
x(t) = e^{\pm i \omega t}
$$

where $\omega$ is the angular frequency of the oscillation.
Their linear combination gives the general solution:

$$
x(t) = C e^{i \omega t} + D e^{-i \omega t}
$$

where A and B are constants determined by initial conditions. Using Euler's formula, this can be rewritten as:

$$
x(t) = C (cos(\omega t) + i \, \sin(\omega t)) + D (cos(\omega t) - i \, \sin(\omega t))
$$

$$
x(t) = (C + D) \cos(\omega t) + i (C - D) \sin(\omega t)
$$

Taking $C + D = A_1$ and $i \, (C - D) = A_2$, we get:

$$
x(t) = A_1 \cos(\omega t) + A_2 \sin(\omega t)
$$

where $A_1$ and $A_2$ are constants determined by initial conditions. As at $t = 0$, $x = A_1 = 0$, we can introduce new constants $A$ and $\phi$ such that:

$$
A_1 = A \sin(\phi)
$$

$$
A_2 = A \cos(\phi)
$$

Putting these values in the equation of motion, we get:

$$
x(t) = A \sin(\phi) \cos(\omega t) + A \cos(\phi) \sin(\omega t)
$$

$$
x(t) = A \sin(\omega t + \phi)
$$

The $\omega t + \phi$ is the phase of the oscillation and $phi$ is the phase constant depending on initial conditions. The amplitude of the oscillation is given by $A$.

Differentiating this equation gives the velocity and acceleration as:

$$
v(t) = \dot{x}(t) = A \omega \cos(\omega t + \phi)
$$

$$
v(t) = \omega \sqrt{A^2 - x^2}
$$

$$
a(t) = \ddot{x}(t) = -A \omega^2 \sin(\omega t + \phi)
$$

$$
a(t) = -\omega^2 x(t)
$$

$$
\omega = \sqrt{\frac{k}{m}}
$$

Here, A is the amplitude (maximum displacement), ω (Greek letter omega) is the angular frequency, and φ (Greek letter phi) is the phase constant depending on initial conditions. The angular frequency relates to the natural frequency (f) of the oscillator by:

$$
\omega = 2\pi f
$$

$$
\sqrt{\frac{k}{m}} = 2\pi f
$$

$$
f = \frac{1}{2\pi} \sqrt{\frac{k}{m}}
$$

The natural frequency is a characteristic property of the system and determines the frequency at which it oscillates freely.

### Amplitude and Energy in Harmony

The amplitude of an oscillation is the maximum displacement from equilibrium. It is a crucial parameter that determines the energy of the system. For a mass-spring system, the total mechanical energy (kinetic + potential) remains constant during SHM:

$$
E = \frac{1}{2} k A^2
$$

This equation shows that the energy is proportional to the square of the amplitude. As the mass oscillates, the energy continuously transforms between kinetic and potential forms, but the total energy remains constant.

Derivation of the above equation:

$$
\int dU = -\int F dx
$$

$$
\int dU = -\int -kx dx
$$

$$
U = \frac{1}{2} k x^2
$$

$$
U = \frac{1}{2} k A^2 \sin^2(\omega t + \phi)
$$

$$
K = \frac{1}{2} m v^2
$$

$$
K = \frac{1}{2} m A^2 \omega^2 \cos^2(\omega t + \phi)
$$

$$
K = \frac{1}{2} k A^2 \cos^2(\omega t + \phi)
$$

$$
E = K + U
$$

$$
E = \frac{1}{2} k A^2 \cos^2(\omega t + \phi) + \frac{1}{2} k A^2 \sin^2(\omega t + \phi)
$$

$$
E = \frac{1}{2} k A^2
$$

### When Harmony Fades: Damped Harmonic Motion

In the real world, friction and other dissipative forces inevitably come into play. These forces damp the oscillations, gradually reducing their amplitude over time. This type of motion is called Damped Harmonic Motion. The equation of motion for a damped harmonic oscillator becomes:

$$
m \ddot{x} + c \dot{x} + kx = 0
$$

This can be rewritten as:

$$
\ddot{x} + 2 \zeta \omega \dot{x} + \omega^2 x = 0
$$

where $\zeta$ is the damping ratio, c is the damping coefficient, and $\omega$ is the angular frequency. A possible solution to this equation is:

$$
x(t) = e^{\alpha t}
$$

where $\alpha$ is a complex number. So, the equation of motion becomes:

$$
\alpha^2 + 2 \zeta \omega \alpha + \omega^2 = 0
$$

The solution to this quadratic equation gives the roots:

$$
\alpha = -\zeta \omega \pm \sqrt{\zeta^2 \omega^2 - \omega^2}
$$

Hence, x(t) can be written as:

$$
x(t) = e^{(-\zeta \omega \pm \sqrt{\zeta^2 \omega^2 - \omega^2})t}
$$

$$
x(t) = e^{-\zeta \omega t} e^{\pm i \omega_d t}
$$

Here, $\zeta$ is the damping ratio, and $\omega_d$ is the damped angular frequency:

$$
\zeta = \frac{c}{2 \sqrt{km}}
$$

$$
\omega_d = \omega \sqrt{1 - \zeta^2}
$$

Linear combination of the above two gives the general solution:

$$
x(t) = e^{-\zeta \omega t} (C \, e^{i \omega_d t} + D \, e^{-i \omega_d t})
$$

Depending on the damping ratio, the motion can be classified into three regimes: underdamped, critically damped, and overdamped.

### Damping Ratio and Motion

The damping ratio ($\zeta$) is a crucial parameter that determines the behavior of a damped harmonic oscillator. It is defined as the ratio of the damping coefficient to the critical damping coefficient:

$$
\zeta = \frac{c}{c_{crit}}
$$

where $c_{crit} = 2 \sqrt{km}$ is the critical damping coefficient. The damping ratio can be classified into three regimes:

* **Underdamped ($\zeta < 1$):** The system oscillates with decreasing amplitude.

The damped angular frequency is:

$$
w_d = w \sqrt{1 - \zeta^2}
$$

Let C and D are constants determined by initial conditions. The solution to the equation of motion is:

$$
x(t) = e^{-\zeta \omega t} (C \, (cos(\omega_d t) + i \, \sin(\omega_d t)) + D \, (cos(\omega_d t) - i \, \sin(\omega_d t)))
$$

$$
x(t) = e^{-\zeta \omega t} ((C + D) \cos(\omega_d t) + i (C - D) \sin(\omega_d t))
$$

$$
x(t) = e^{-\zeta \omega t} (A_1 \cos(\omega_d t) + A_2 \sin(\omega_d t))
$$

where $A_1 = C + D$ and $A_2 = i (C - D)$. The amplitude of the damped oscillator is given by:

Let $A_1 = A \sin(\phi)$ and $A_2 = A \cos(\phi)$. Substituting these values in the equation of motion, we get:

$$
x(t) = e^{-\zeta \omega t} (A \sin(\phi) \cos(\omega_d t) + A \cos(\phi) \sin(\omega_d t))
$$

$$
x(t) = A e^{-\zeta \omega t} \sin(\omega_d t + \phi)
$$

The amplitude of the damped oscillator is given by:

$$
A = A_0 e^{-\zeta \omega t}
$$

where $A_0$ is the initial amplitude. The amplitude decreases exponentially with time due to damping.

* **Critically Damped ($\zeta = 1$):** The system returns to equilibrium as quickly as possible without oscillating. The damped angular frequency is:

$$
\omega_d = \omega \sqrt{1 - \zeta^2} = \omega \sqrt{1 - 1} = 0
$$

Putting $\zeta = 1$ and $w_d \rightarrow 0$ in the equation of motion, we get:

$$
x(t) = e^{-\omega t} (C + D t)
$$

* **Overdamped ($\zeta > 1$):** The system returns to equilibrium without oscillating, but more slowly than critically damped.

The damped angular frequency is:

$$
w_d = \omega \sqrt{1 - \zeta^2} = i \omega \sqrt{\zeta^2 - 1}
$$

Let $w_d = i \omega \sqrt{\zeta^2 - 1}$ in the equation of motion, we get:

$$
x(t) = e^{-\zeta \omega t} (C \, \cosh(\omega_d t) + D \, \sinh(\omega_d t))
$$

where $cosh(x) = \frac{e^x + e^{-x}}{2}$ and $sinh(x) = \frac{e^x - e^{-x}}{2}$.

### The Fadeaway: Energy Decay, Relaxation Time and Power Dissipation

Due to damping, the mechanical energy of the oscillator (kinetic + potential) continuously decreases. The rate of this decay depends on the damping coefficient. For an underdamped oscillator, the velocity at any time t is given by:

$$
v(t) = -\zeta \omega A e^{-\zeta \omega t} \sin(\omega_d t + \phi) + \omega_d A e^{-\zeta \omega t} \cos(\omega_d t + \phi)
$$

But, $\omega_d \approx \omega$ for underdamped oscillations. So, the velocity can be approximated as:

$$
v(t) = -\zeta \omega A e^{-\zeta \omega t} \sin(\omega t + \phi) + \omega A e^{-\zeta \omega t} \cos(\omega t + \phi)
$$

But, $\zeta \omega \ll \omega$ for underdamped oscillations. So, the velocity can be approximated as:

$$
v(t) = \omega A e^{-\zeta \omega t} \cos(\omega t + \phi)
$$

The kinetic energy at any time t is given by:

$$
K(t) = \frac{1}{2} m v^2
$$

$$
K(t) = \frac{1}{2} m \omega^2 A^2 e^{-2\zeta \omega t} \cos^2(\omega t + \phi)
$$

The Potential energy at any time t is given by:

$$
U(t) = \frac{1}{2} k x^2
$$

$$
U(t) = \frac{1}{2} k A^2 e^{-2\zeta \omega t} \sin^2(\omega t + \phi)
$$

The total energy at any time t is given by:

$$
E(t) = K(t) + U(t)
$$

$$
E(t) = \frac{1}{2} m \omega^2 A^2 e^{-2\zeta \omega t} \cos^2(\omega t + \phi) + \frac{1}{2} k A^2 e^{-2\zeta \omega t} \sin^2(\omega t + \phi)
$$

$$
E(t) = \frac{1}{2} k A^2 e^{-2\zeta \omega t}
$$

$$
E(t) = E_0 e^{-2\zeta \omega t}
$$

where $E_0$ is the initial energy. The energy decays exponentially with time due to damping.

**Relaxation time** is the time taken for the energy to decrease to $1/e$ of its initial value. It is a measure of how quickly the system returns to equilibrium after being disturbed. It is given by:

$$
\tau = \frac{1}{2\zeta \omega}
$$

$$
E(t) = E_0 e^{- t / \tau}
$$

**The power dissipated** at any time t is given by:

$$
P(t) = -\frac{dE}{dt}
$$

$$
P(t) = -\frac{d}{dt} (E_0 e^{-t / \tau})
$$

$$
P(t) = -\frac{1}{\tau} E_0e^{-t / \tau} = -\frac{E(t)}{\tau}
$$

Power dissipation is negative, indicating that energy is being dissipated from the system.

### The Fading Echo: Logarithmic Decrement and Quality Factor

**Logarithmic decrement** is defined as the natural logarithm of the ratio of the amplitudes of two successive oscillations:

$$
\delta = ln(\frac{A_n}{A_{n+1}})
$$

$$
\delta = ln(\frac{A e^{-\zeta \omega t}}{A e^{-\zeta \omega (t + T)}})
$$

$$
\delta = ln(e^{\zeta \omega T})
$$

$$
\delta = \zeta \omega T
$$

where T is the time period of the oscillation.

**Quality factor (Q)** is a measure of the sharpness of resonance in a damped oscillator which defines the efficiency of the oscillator. It is defined as:

$$
Q = 2\pi \frac{E}{PT} = \frac{2 \pi}{T} \frac{E}{P}
$$

$$
Q = \omega \tau = \frac{1}{2\zeta}
$$

### A Forced Performance: Forced Harmonic Motion

Imagine pushing a swing back and forth at a specific frequency. This external force can influence the motion of the oscillator. This type of motion is called Forced Harmonic Motion.

When a driving force, F_d(t), is applied to a damped harmonic oscillator, the equation of motion becomes:

$$
m \ddot{x} + c \dot{x} + kx = F_d(t)
$$

This can be rewritten as:

$$
\ddot{x} + 2 \zeta \omega \dot{x} + \omega^2 x = f_0 \sin (\omega t)
$$

where $f_0$ is the amplitude of the driving force, and $\omega$ is the angular frequency of the driving force.

Let the solution is in the form:

$$
x(t) = A \sin(\omega t - \phi)
$$

The equation of motion becomes:

$$
-A \omega^2 \sin(\omega t - \phi) + 2 \zeta \omega A \omega \cos(\omega t - \phi) + \omega_0^2 A \sin(\omega t - \phi) = f_0 \sin(\omega t)
$$

$$
f_0 \sin(\phi + (\omega t - \phi)) = f_0 \sin(\phi) \cos(\omega t - \phi) + f_0 \cos(\phi) \sin(\omega t - \phi)
$$

Comparing the coefficients of $\sin(\omega t - \phi)$ and $\cos(\omega t - \phi)$, we get:

$$
A (\omega_0^2 - \omega^2) = f_0 \cos(\phi)
$$

$$
2 \zeta \omega A \omega = f_0 \sin(\phi)
$$

Squaring and adding, we get the amplitude of the oscillator:

$$
A = \frac{f_0}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2 \zeta \omega^2)^2}}
$$

Condition on the amplitude of the oscillator:

- If $\omega = \omega_0$, then $A = \frac{f_0}{2 \zeta \omega_0^2}$.
- If $\omega \ll \omega_0$, then $A = \frac{f_0}{\omega_0^2}$.
- If $\omega \gg \omega_0$, then $A = \frac{f_0}{\omega^2}$.

The phase difference between the driving force and the oscillator is:

$$
\phi = \tan^{-1}(\frac{2 \zeta \omega^2}{\omega_0^2 - \omega^2})
$$

So, the solution to the equation of motion is:

$$
x(t) = \frac{f_0}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2 \zeta \omega^2)^2}} \sin(\omega t - \phi)
$$

### The Grand Finale: Resonance

A fascinating phenomenon occurs when the driving force's frequency matches the oscillator's natural frequency ($\omega_d \approx \omega_0$). This condition is called resonance. At resonance, the driving force significantly amplifies the oscillator's motion, leading to a much larger amplitude than for off-resonance frequencies.

The amplitude of the oscillator to be maximum at resonance is:

$$
\frac{d}{d\omega}\sqrt{(\omega_0^2 - \omega^2)^2 + (2 r \omega)^2} = 0
$$

$$
\frac{d}{d\omega}(\omega_0^2 - \omega^2)^2 + (2 r \omega)^2 = 0
$$

$$
2(\omega_0^2 - \omega^2)(-2\omega) + 4 r^2 (2\omega) = 0
$$

$$
4\omega (\omega^2 - \omega_0^2 + 2r^2) = 0
$$

$$
\omega = \sqrt{\omega_0^2 - 2r^2}
$$

For low damping, the resonance frequency ($r \ll \omega_0$) is approximately equal to the natural frequency of the oscillator. i.e., $\omega \approx \omega_0$. The amplitude of the oscillator at resonance is:

$$
A = \frac{f_0}{2 r \omega_0}
$$

Resonance has numerous applications, from tuning instruments (where the string resonates with a specific sound wave) to vibration isolation systems (where absorbers are designed to resonate at the opposite frequency of unwanted vibrations, cancelling them out).

### The Entangled Dance: Coupled Oscillations

Imagine two pendulums hanging close together. When one pendulum swings, it can transfer some of its energy to the other pendulum, setting it in motion. This energy exchange and interaction between oscillators are known as Coupled Oscillations.

There are many ways oscillators can be coupled, including springs, pendulums hanging close together, or even interacting electrical circuits. The analysis of coupled oscillators can become quite complex, but we can explore the basic concept.

Consider two masses ($m_1$ and $m_2$) connected by springs as a simple example. The motion of each mass is now influenced by the displacement of the other. By applying Newton's second law to each mass and considering the forces from the springs, we obtain a system of two coupled differential equations. Solving these equations can reveal fascinating behaviors:

* **Normal Modes:** The system can exhibit specific frequencies at which both masses vibrate in a coordinated fashion. These frequencies are typically different from the individual natural frequencies of the uncoupled oscillators.
* **Energy Transfer:** The energy can oscillate between the two masses, with one mass reaching maximum amplitude while the other is at minimum, and then vice versa. This exchange happens at a specific frequency depending on the coupling strength.

#### Simple Pendulum

Let's consider a simple pendulum of mass $m$ and length $l$. The net force $F$ acting on the pendulum are:

- Gravitational force $mg$ acting downwards.
- Tension $T$ in the string, acting towards the pivot.

So, the radial component of the net force is:

$$
F_r = mg \cos(\theta) - T
$$

The tangential component of the net force is:

$$
F_{\theta} = -mg \sin{\theta}
$$

For small angles, $\sin(\theta) \approx \theta$. So, tangential components of the net force are:

$$
F_{\theta} = -mg \theta
$$

But, $\theta \approx \tan(\theta) \approx \frac{x}{L}$, where $x$ is the displacement of the pendulum. So, the tangential component of the net force is:

$$
m \frac{d^2x}{dt^2} = -mg \frac{x}{L}
$$

$$
\frac{d^2x}{dt^2} + \frac{g}{L} x = 0
$$

This is the equation of motion for a simple pendulum. The angular frequency of the pendulum is:

$$
\omega = \sqrt{\frac{g}{L}}
$$

The corresponding period of the pendulum is:

$$
T = 2\pi \sqrt{\frac{L}{g}}
$$

#### Motion in same direction:

Let $x_1$ and $x_2$ be the displacements of the masses $m_1$ and $m_2$ respectively. The equations of motion for the coupled system are:

$$
x_1 = A_1 \sin(\omega t)
$$

$$
x_2 = A_2 \sin(\omega t + \phi)
$$

where $A_1$ and $A_2$ are the amplitudes of the oscillations, and $\phi$ is the phase difference between the two masses. But $x = x_1 + x_2$ is the relative displacement between the two masses. Substituting the values of $x_1$ and $x_2$ in the equation of motion, we get:

$$
x = A_1 \sin(\omega t) + A_2 \sin(\omega t + \phi)
$$

$$
x = (A_1 + A_2 \cos(\phi)) \sin(\omega t) + A_2 \sin(\omega t) \cos(\phi)
$$

$$
x = C \sin(\omega t) + D \cos(\omega t)
$$

where $C = A_1 + A_2 \cos(\phi)$ and $D = A_2 \sin(\phi)$. The above equation represents the motion of the coupled system. The motion is a simple harmonic motion with an angular frequency $\omega$.

$$
x = R \sin(\omega t + \delta)
$$

where $R = \sqrt{C^2 + D^2}$ and $\delta = tan^{-1}(\frac{D}{C})$. The amplitude of the coupled system is given by $R$.

#### Motion in perpendicular direction:

Let $x_1$ and $x_2$ be the displacements of the masses $m_1$ and $m_2$ respectively. The equations of motion for the coupled system are:

$$
x = A_1 \sin(\omega t)
$$

$$
y = A_2 \sin(\omega t + \phi)
$$

We can infer, $sin(\omega t) = \frac{x}{A_1}$ and $cos(\omega t) = \sqrt{1 - \frac{x^2}{A_1^2}}$. Substituting these values in the equation of $y$, we get:

$$
y = A_2 \sin(\omega t) \cos(\phi) + A_2 \cos(\omega t) \sin(\phi)
$$

$$
y = A_2 \frac{x}{A_1} \cos(\phi) + A_2 \sqrt{1 - \frac{x^2}{A_1^2}} \sin(\phi)
$$

$$
(\frac{y}{A_2} - \frac{x}{A_1} \cos(\phi))^2 = (1 - \frac{x^2}{A_1^2}) \sin^2(\phi)
$$

$$
\frac{y^2}{A_2^2} - 2 \frac{xy}{A_1 A_2} \cos(\phi) + \frac{x^2}{A_1^2} \cos^2(\phi) = \sin^2(\phi) - \frac{x^2}{A_1^2} \sin^2(\phi)
$$

$$
\frac{y^2}{A_2^2} - 2 \frac{xy}{A_1 A_2} \cos(\phi) + \frac{x^2}{A_1^2} = \sin^2(\phi)
$$

* **if $\phi = 0$**, then $y = \frac{A_2}{A_1} x$.
* **if $\phi = \pi/2$**, then $y = \frac{A_2}{A_1} \sqrt{A_1^2 - x^2}$.
* **if $\phi = \pi$**, then $y = -\frac{A_2}{A_1} x$.

### Applications of Coupled Oscillations

The study of coupled oscillations has applications in various fields, including:

* **Molecular vibrations:** In molecules, atoms are coupled oscillators, and their vibrations determine the molecule's properties and behavior.
* **Crystal lattices:** The atoms in a crystal lattice can be viewed as coupled oscillators, influencing the material's thermal and elastic properties.
* **Josephson junctions:** These superconducting devices exhibit coupled oscillations with technological applications in high-frequency electronics.

### Conclusion

The world of harmonic motion is rich with diverse phenomena. From the simple elegance of SHM to the complex interplay of coupled oscillators, understanding these concepts provides a deeper appreciation for the vibrational nature of our universe. The equations and concepts explored in this blog post lay the foundation for further delving into these fascinating topics.
