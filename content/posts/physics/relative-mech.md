---
title: Relative Mechanics
description: A brief overview of relative mechanics.
date: 2023-02-27
draft: false
slug: /pensieve/physics/relative-mech
tags:
  - Physics
  - Mechanics
---
The dawn of the 20th century witnessed a revolutionary shift in our understanding of space, time, and motion. Maxwell’s equations had already unified electricity and magnetism, but it was Einstein’s insight into relative motion that demanded a new framework—one where classical ideas melded seamlessly with modern physics.

## Galilean Relativity

Galileo Galilei was the first to propose that the laws of physics are the same in all inertial frames of reference. This principle, known as Galilean relativity, forms the foundation of classical mechanics. It implies that the laws of motion are invariant under the Galilean transformation:

$$
\begin{aligned}
x′ &= x - vt \\
y′ &= y \\
z′ &= z \\
t′ &= t
\end{aligned}
$$

where $(t, x, y, z)$ are the coordinates in one inertial frame $S$ and $(t′, x′, y′, z′)$ are the coordinates in another frame $S′$ moving with velocity \(v\) along the x-axis.

## Einstein’s Postulates and the Lorentz Transformation

Einstein’s theory of special relativity was built on two postulates:

1. **The Principle of Relativity**: The laws of physics are the same in all inertial frames of reference.
2. **Constancy of the Speed of Light**: The speed of light in a vacuum is the same for all observers, regardless of their relative motion.

These postulates led to the **Lorentz transformation**:

Consider two inertial frames: $S$ (stationary) and $S′$ (moving with constant velocity $v$ along the x-axis relative to $S$). At $t$ = $t′$ = 0, the origins of both frames coincide. In Frame $S$, a light pulse emitted from the origin at $t = 0$ satisfies the equation:

$$
x^2 + y^2 + z^2 = c^2t^2
$$

where $c$ is the speed of light. In Frame $S′$, the same light pulse satisfies the equation:

$$
x′^2 + y′^2 + z′^2 = c^2t′^2
$$

Assume linear relationships between coordinates due to the homogeneity of space and time:

$$
\begin{aligned}
x′ &= \gamma(x - vt) \\
y′ &= y \\
z′ &= z \\
t′ &= \gamma\left(t - \frac{vx}{c^2}\right)
\end{aligned}
$$

Starting from the invariance of the spacetime interval, one requires:

$$
\begin{aligned}
c^2t^2 - x^2 - y^2 - z^2 &= c^2t′^2 - x′^2 - y′^2 - z′^2 \\
c^2t^2 - x^2 &= c^2t′^2 - x′^2 \\
c^2t^2 - x^2 &= c^2\gamma^2 \left(t - \dfrac{vx}{c^2}\right)^2 - \gamma^2 \left(x - vt\right)^2 \\
c^2t^2 - x^2 &= \gamma^2 \left(c^2t^2 - 2vtx + \dfrac{v^2x^2}{c^2}\right) - \gamma^2 \left(x^2 - 2vtx + v^2t^2\right) \\
c^2t^2 - x^2 &=  \gamma^2 \left(c^2t^2 - x^2\right) \left(1-\dfrac{v^2}{c^2}\right)
\end{aligned}
$$

Therefore, the Lorentz factor is given by:

$$
\gamma = \dfrac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}}
$$

### The Invariance of Minkowski Norm

A key property of Lorentz transformations is that they leave the Minkowski inner product invariant to preserve the “shape” of Minkowski spacetime. For any four‑vector $A^\mu$ with signature $(+, −, −, −)$, the invariant is:

$$
A^\mu A_\mu = (A^0)^2 - (A^1)^2 - (A^2)^2 - (A^3)^2
$$

## Time Dilation and Length Contraction

**Time dilation** refers to the phenomenon where time appears to pass more slowly for an observer in motion relative to a stationary observer. The time dilation factor is given by:

$$
\begin{aligned}
\Delta t′ &= \gamma \Delta t
\end{aligned}
$$

![Time Dilation](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Time-dilation-002-mod.svg/2560px-Time-dilation-002-mod.svg.png)

In the static frame, the time interval $\Delta t$ is given by:

$$
\Delta t = 2\dfrac{L}{c}
$$

In the moving frame, the time interval $\Delta t′$ is given by:

$$
\Delta t′ = 2\dfrac{D}{c}
$$

Taking the triangle in green, and applying Pythagoras' theorem, we get:

$$
D^2 = L^2 + \left(\dfrac{1}{2}v\Delta t′\right)^2
$$

Substituting $L$ as $\dfrac{1}{2}c\Delta t$ and $D$ as $\dfrac{1}{2}c\Delta t′$, we get:

$$
\begin{aligned}
\left(c\Delta t′\right)^2 &= \left(c\Delta t\right)^2 + \left(v\Delta t′\right)^2 \\
\Delta t′^2 &= \Delta t^2 + \dfrac{v^2\Delta t′^2}{c^2} \\
\Delta t^2 &=  \Delta t′^2 \left(1 - \dfrac{v^2}{c^2}\right)\\
\Delta t′ &= \gamma \Delta t
\end{aligned}
$$

**Length contraction**, on the other hand, is the shortening of an object along the direction of motion. The length contraction factor is given by:

$$
L′ = \dfrac{L}{\gamma}
$$

If the object rests in $S$ and its proper length is known, the simultaneity of the measurements at the object's endpoints has to be considered in another frame $S′$, as the object constantly changes its position there. Therefore, both spatial and temporal coordinates must be transformed:

$$
\begin{aligned}
x_1′ &= \gamma(x_1 - vt_1) \\
x_2′ &= \gamma(x_2 - vt_2) \\
t_1′ &= \gamma\left(t_1 - \dfrac{vx_1}{c^2}\right) \\
t_2′ &= \gamma\left(t_2 - \dfrac{vx_2}{c^2}\right)
\end{aligned}
$$

The length of the object in $S′$ is given by:

$$
L′ = x_2′ - x_1′ = \gamma(L - v\Delta t)
$$

The time interval $\Delta t′$ should be zero for the object at rest in $S′$:

$$
\Delta t′ = \gamma (\Delta t - \dfrac{v}{c^2}L) = 0
$$

$$
\implies \Delta t = \dfrac{v}{c^2}L
$$

Therefore, the length contraction factor is given by:

$$
L′ = \gamma L \left(1 - \dfrac{v^2}{c^2}\right) = \dfrac{L}{\gamma}
$$

## Relativistic Momentum and Energy

### Definition of Proper Time

The proper time $\tau$ is the time interval between two events as measured by an observer who sees the events occur at the same position. The proper time is given by:

$$
d\tau = \sqrt{1 - \dfrac{v^2}{c^2}}dt
$$

where $v$ is the velocity of the observer and $c$ is the speed of light.

In Minkowski spacetime with signature $(+, −, −, −)$, the spacetime interval between two nearby events is given by:

$$
ds^2 = c^2dt^2 - dx^2 - dy^2 - dz^2
$$

For a particle following a worldline, we define the proper time $d\tau$ as the time measured in the particle’s rest frame. By definition, for a timelike interval:

$$
ds^2 = c^2d\tau^2
$$

Now, consider a particle moving with velocity $u = (u_x, u_y, u_z)$. In a given inertial frame, its displacement during time $dt$ is:

$$
dx = u_xdt,\, dy = u_ydt,\, dz = u_zdt
$$

The spatial distance squared is:

$$
dx^2 + dy^2 + dz^2 = u_x^2dt^2 + u_y^2dt^2 + u_z^2dt^2 = u^2dt^2
$$

Therefore, the spacetime interval is:

$$
ds^2 = c^2dt^2 - u^2dt^2 = dt^2(c^2 - u^2) = c^2d\tau^2
$$

Hence, the proper time is:

$$
d\tau = dt\left(\sqrt{1 - \dfrac{u^2}{c^2}}\right) = \dfrac{dt}{\gamma}
$$

### Four-Vectors

A four-vector is a vector in four-dimensional spacetime.

The four-position vector is given by:

$$
x^\mu = (ct, x, y, z)
$$

**The four-velocity vector** is given by:

$$
u^\mu = \dfrac{dx^\mu}{d\tau} = \left(\dfrac{d(ct)}{d\tau}, \dfrac{dx}{d\tau}, \dfrac{dy}{d\tau}, \dfrac{dz}{d\tau}\right)
$$

Using the chain rule, we can write:

$$
\dfrac{d(ct)}{d\tau} = \dfrac{d(ct)}{dt} \dfrac{dt}{d\tau} = c\dfrac{dt}{d\tau} = c\gamma
$$

Similarly, we can write:

$$
\dfrac{dx}{d\tau} = \dfrac{dx}{dt} \dfrac{dt}{d\tau} = \dfrac{dx}{dt}\gamma = u_x\gamma
$$

Therefore, the four-velocity vector is:

$$
u^\mu = \gamma \left(c, u_x, u_y, u_z\right)
$$

**The four-momentum vector** is given by:

$$
p^\mu = m_0u^\mu = m_0\gamma \left(c, u_x, u_y, u_z\right)
$$

where $m_0$ is the rest mass of the particle.

We know that the energy of a particle is given by:

$$
E = F dx = \dfrac{dp}{dt}u_x dt = u dp
$$

But,

$$
\begin{aligned}
\dfrac{dp}{du} &= \dfrac{d}{du}\left(m_0\gamma u\right) \\
\dfrac{dp}{du} &= m_0 \dfrac{d}{du} \dfrac{u}{\sqrt{1 - \dfrac{u^2}{c^2}}} \\
dp &= m_0 \gamma^3 du
\end{aligned}
$$

Substituting $dp$ in the equation for energy, we get:

$$
\begin{aligned}
\int_0^u E &= m_0 \int_0^u \gamma^3 u\,du \\
E_u - E_0 &= m_0c^2 \left(\dfrac{1}{\sqrt{1 - \dfrac{u^2}{c^2}}} - 1\right) \\
E &= E_0 + m_0c^2 \left(\gamma - 1\right)
\end{aligned}
$$

But, $E_0 = m_0c^2$, so:

$$
E = m_0c^2\gamma
$$

Therefore, the four-momentum vector can be written as:

$$
p^\mu = \left(\dfrac{E}{c}, p_x, p_y, p_z\right)
$$

### Energy-Momentum Relation

The energy-momentum relation for a particle with rest mass $m_0$ is given by:

$$
E^2 = p^2c^2 + m_0^2c^4
$$

Starting from the definition of energy($E = m_0c^2\gamma$) and momentum($p = m_0\gamma u$), we can write:

$$
\begin{aligned}
E^2 - p^2c^2 &= m_0^2c^4\gamma^2 - m_0^2c^2\gamma^2u^2 \\
E^2 - p^2c^2 &= m_0^2c^4\gamma^2\left(1 - \dfrac{u^2}{c^2}\right) \\
E^2 - p^2c^2 &= m_0^2c^4 \\
E^2 &= p^2c^2 + m_0^2c^4
\end{aligned}
$$

If we divide the equation by $c^4$, we get:

$$
\begin{aligned}
\left(\dfrac{E}{c^2}\right)^2 &= \left(\dfrac{p}{c}\right)^2 + m_0^2 \\
m_0^2 &= m^2 - \left(\dfrac{mv}{c}\right)^2 \\
m_0^2 &= m^2\left(1 - \dfrac{v^2}{c^2}\right) \\
m &= \gamma m_0
\end{aligned}
$$

Therefore, the mass of a particle moving with velocity $v$ is given by:

$$
m = \gamma m_0
$$

This is the relativistic mass of the particle.

## Relativistic Doppler Effect

The relativistic Doppler effect is the change in frequency of light due to the relative motion of the source and observer. The frequency of light observed by an observer moving with velocity $v$ is given by:

$$
f′ = \dfrac{f}{\gamma(1 + \dfrac{v}{c}\cos\theta)}
$$

where $f$ is the frequency of light in the source frame, $f′$ is the frequency of light in the observer frame, and $\theta$ is the angle between the direction of motion and the direction of light.

A monochromatic plane wave in an inertial frame $S$ can be described by its phase:

$$
\phi = \omega t - \vec{k} \cdot \vec{x}
$$

where $\omega$ is the angular frequency of the light and $\vec{k} = \dfrac{\omega}{c}\vec{n}$ is the wave vector. A fundamental fact is that the phase $\phi$ is a Lorentz scalar. This means that if we transform to another inertial frame $S′$, then the phase must remain the same:

$$
\phi = \omega t - \vec{k} \cdot \vec{x} = \omega′ t′ - \vec{k}′ \cdot \vec{x}′ = \phi′
$$

where $\omega′$ is the angular frequency of the light in the observer frame and $\vec{k}′$ is the wave vector in the observer frame.

The wave vector is given by:

$$
k^\mu = \left(\dfrac{\omega}{c}, k_x, k_y, k_z\right)
$$

where $\omega$ is the angular frequency of the light and $(k_x, k_y, k_z)$ are the components of the wave vector. Then the phase may be written in manifestly invariant form as:

$$
\phi = k^\mu x_\mu
$$

Now consider two inertial frames:
$S$: the 'source frame' where the radiation is emitted with frequency $f$.
$S′$: the observer’s frame, moving with constant speed $v$ relative to $S$ along the $x$-axis.

For a Lorentz boost along the $x$-axis, the transformation for the components of a four-vector is:

$$
\begin{aligned}
\dfrac{\omega}{c}′ &= \gamma\left(\dfrac{\omega}{c} - \dfrac{v}{c}k_x\right) \\
k_x′ &= \gamma(k_x - \dfrac{v}{c}\dfrac{\omega}{c}) \\
k_y′ &= k_y \\
k_z′ &= k_z \\
\end{aligned}
$$

But, $k_x = \dfrac{\omega}{c}\cos\theta$, so:

$$
\begin{aligned}
\dfrac{\omega}{c}′ &= \gamma \dfrac{\omega}{c} \left(1 - \dfrac{v}{c}\cos\theta\right) \\
k_x′ &= \gamma \dfrac{\omega}{c} \left(\cos\theta - \dfrac{v}{c}\right) \\
\end{aligned}
$$

Since the frequency measured in the observer’s frame is defined by:

$$
\omega′ = c k′ = \gamma \omega \left(1 - \dfrac{v}{c}\cos\theta\right)
$$

When we interpret the transformation 'inversely' – that is, when the observer is moving relative to a source that is at rest. (The derivation above assumed the source frame was $S$ and we boosted to $S′$. Inverting the roles reverses the sign in the Doppler shift factor.)

$$
\begin{aligned}
\omega &= \gamma \omega′ \left(1 + \dfrac{v}{c}\cos\theta\right) \\
\omega′ &= \dfrac{\omega}{\gamma \left(1 + \dfrac{v}{c}\cos\theta\right)} \\
f′ &= \dfrac{f}{\gamma \left(1 + \dfrac{v}{c}\cos\theta\right)}
\end{aligned}
$$

This is the relativistic Doppler effect for light.

## Mass-Energy Equivalence

The mass-energy equivalence principle states that mass and energy are equivalent and can be converted into each other. The equivalence is given by Einstein’s famous equation:

$$
E = mc^2
$$

Consider a body of rest mass $m_0$ is initially at rest. It emits two light pulses simultaneously along the $+x$ and $-x$ directions. In the rest frame, each pulse carries energy $\dfrac{L}{2}$ so that the total energy radiated is $L$ and the momentum carried by a light pulse is given by $p = \dfrac{E}{c} = \dfrac{L}{2c}$. Because these are equal and opposite, the net momentum of the light in $S = 0$, and the body recoils with no net momentum.

Now, consider an observer in frame $S′$ moving with constant speed $v$ relative to $S$ along the $+x$-axis. In $S′$, due to the relativistic Doppler effect, the energies (and hence momenta) of the two pulses are shifted differently. Since the energy of a photon is proportional to its frequency ($E = hf$), the energy of a pulse transforms by the same factor.

$$
E_+ = \dfrac{L}{2\gamma(1 + \dfrac{v}{c})},\, E_- = \dfrac{L}{2\gamma(1 - \dfrac{v}{c})}
$$

Because for light the momentum is related to energy by $\left(p = \dfrac{E}{c}\right)$, we get:

$$
\begin{aligned}
\Delta p′ &= p′_- - p′_+ \\
p′ &= \dfrac{L}{2c\gamma} \left(\dfrac{1}{1 - \dfrac{v}{c}} - \dfrac{1}{1 + \dfrac{v}{c}}\right) \\
&= \dfrac{Lv}{c^2} \gamma
\end{aligned}
$$

The body recoils with momentum $\Delta p′$ in the $+x$ direction. By conservation of momentum, the body must lose mass $\Delta m$ in the process.

Let’s denote the mass of the body before emission as $m_0$ and after emission as $m_0 − \Delta m$. In the rest frame $S$ the body has zero momentum. However, in the moving frame $S′$, before the emission the body is moving with velocity $v$ so that its momentum is $P′_i = \gamma m_0v$. After the emission, $P′_f = \gamma(m_0 - \Delta m)v$. The change in momentum is:

$$
\Delta P′ = P′_i - P′_f = \gamma m_0v - \gamma(m_0 - \Delta m)v = \gamma \Delta m v
$$

By conservation of momentum, $\Delta p′ = -\Delta P′$. Therefore, we have:

$$
\begin{aligned}
\dfrac{Lv}{c^2} \gamma &= \gamma \Delta m v \\
\dfrac{L}{c^2} &= \Delta m \\
L &= \Delta m c^2 \\
dE &= c^2 dm \\
E &= mc^2
\end{aligned}
$$

This is the mass-energy equivalence principle.

## Space-Time Diagrams

Space-time diagrams are a useful tool for visualizing the effects of special relativity. In a space-time diagram, time is plotted on the vertical axis and space is plotted on the horizontal axis.

### Minkowski Spacetime

Minkowski spacetime is a four-dimensional manifold that combines three dimensions of space with one dimension of time. It is named after the mathematician Hermann Minkowski, who first proposed it in 1908. In Minkowski spacetime, the spacetime interval between two events is given by:

$$
ds^2 = c^2dt^2 - dx^2 - dy^2 - dz^2
$$

where $ds$ is the spacetime interval, $c$ is the speed of light, and $(t, x, y, z)$ are the coordinates of the events.

In Minkowski spacetime, the spacetime interval is invariant under Lorentz transformations, which are the transformations that relate the coordinates of an event in one inertial frame to the coordinates of the same event in another inertial frame moving at a constant velocity relative to the first frame.

### Worldlines

The path of an object through space-time is called its worldline. In a space-time diagram, a worldline is represented by a curve that shows the object's position at each point in time. Often the time units are chosen such that the speed of light is represented by lines at a fixed angle, usually at 45 degrees, forming a cone with the vertical (time) axis. In general, useful curves in spacetime can be of three types (the other types would be partly one, partly another type):

- **light-like curves**, having at each point the speed of light. They form a cone in spacetime, dividing it into two parts. The cone is three-dimensional in spacetime, appears as a line in drawings with two dimensions suppressed, and as a cone in drawings with one spatial dimension suppressed.

![Light Cone](https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/World_line2.svg/1920px-World_line2.svg.png)

An example of a light cone, the three-dimensional surface of all possible light rays arriving at and departing from a point in spacetime. Here, it is depicted with one spatial dimension suppressed.

- **time-like curves**, with a speed less than the speed of light. These curves must fall within a cone defined by light-like curves. In our definition above: world lines are time-like curves in spacetime.
- **space-like curves** falling outside the light cone. Such curves may describe, for example, the length of a physical object. The circumference of a cylinder and the length of a rod are space-like curves.

At a given event on a world line, spacetime (Minkowski space) is divided into three parts.

- The future of the given event is formed by all events that can be reached through time-like curves lying within the future light cone.
- The past of the given event is formed by all events that can influence the event (that is, that can be connected by world lines within the past light cone to the given event).
  - The lightcone at the given event is formed by all events that can be connected through light rays with the event. When we observe the sky at night, we basically see only the past light cone within the entire spacetime.
- Elsewhere is the region between the two light cones. Points in an observer's elsewhere are inaccessible to them; only points in the past can send signals to the observer. In ordinary laboratory experience, using common units and methods of measurement, it may seem that we look at the present, but in fact there is always a delay time for light to propagate. For example, we see the Sun as it was about 8 minutes ago, not as it is "right now". Unlike the present in Galilean/Newtonian theory, the elsewhere is thick; it is not a 3-dimensional volume but is instead a 4-dimensional spacetime region.
  - Included in "elsewhere" is the simultaneous hyperplane, which is defined for a given observer by a space that is hyperbolic-orthogonal to their world line. It is really three-dimensional, though it would be a 2-plane in the diagram because we had to throw away one dimension to make an intelligible picture. Although the light cones are the same for all observers at a given spacetime event, different observers, with differing velocities but coincident at the event (point) in the spacetime, have world lines that cross each other at an angle determined by their relative velocities, and thus they have different simultaneous hyperplanes.
  - The present often means the single spacetime event being considered.

### Relativity of Simultaneity

The relativity of simultaneity is a key feature of special relativity. It states that two events that are simultaneous in one frame of reference may not be simultaneous in another frame that is moving relative to the first frame. This is due to the fact that time is relative and depends on the observer's motion.

In a space-time diagram, the simultaneity of two events is represented by a horizontal line that passes through both events. If two events are simultaneous in one frame, the horizontal line will be parallel to the time axis. However, if the events are not simultaneous in another frame, the horizontal line will be at an angle to the time axis.

## Conclusion

The theory of special relativity has revolutionized our understanding of space, time, and motion. By introducing the concept of spacetime and the invariance of the spacetime interval, Einstein was able to reconcile the laws of physics with the constancy of the speed of light. The theory has far-reaching implications for our understanding of the universe, from the behavior of particles at high speeds to the structure of spacetime itself. Special relativity has been confirmed by numerous experiments and is a cornerstone of modern physics.
