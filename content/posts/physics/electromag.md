---
title: Electromagnetism
description: A Journey Through Vector Calculus and Maxwell's Equations
date: 2023-02-22
draft: false
slug: /pensieve/physics/em
tags:
  - Physics
  - Electromagnetism
---
Electromagnetism, the force governing the interaction between electrically charged particles, forms the foundation of modern physics and technology. This blog post dives deep into the mathematical framework – vector calculus –  and unveils the cornerstone of electromagnetism – Maxwell's equations. We'll explore their differential and integral forms, derive the wave equation for light, and delve into the concepts of scalar and vector potentials, concluding with Poynting's theorem. Buckle up for a thrilling ride through the world of electromagnetism!

### Unveiling the Tools:

#### Vector Calculus

Vector calculus equips us with the mathematical language to describe and analyze quantities that have both magnitude and direction, like electric and magnetic fields. Here, we'll focus on three crucial operations:

* **Gradient (grad):** Represents the rate of change of a scalar field (a quantity with only magnitude) in space. Mathematically, for a scalar field φ(x, y, z), the gradient is:

$$
grad(\varphi) = \nabla \varphi = \hat{\imath} \left( \frac{\partial \varphi}{\partial x} \right) + \hat{\jmath} \left( \frac{\partial \varphi}{\partial y} \right) + \hat{k} \left( \frac{\partial \varphi}{\partial z} \right)
$$

where $\nabla$ is the del operator, and $\hat{\imath}, \hat{\jmath}, \hat{k}$ are unit vectors in the x, y, and z directions.

* **Divergence (div):** Measures the net outward flow of a vector field (a quantity with both magnitude and direction) from a point source. The divergence of a vector field A(x, y, z) is:

$$
div(\vec A) = \nabla \cdot \vec{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}
$$

* **Curl (curl):** Represents the rotational tendency of a vector field. The curl of a vector field A(x, y, z) is:

$$
curl(\vec{A}) = \nabla \times \vec{A} = \det \begin{pmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ \\ A_x & A_y & A_z \end{pmatrix}
$$

**Second Derivatives:**

1. Divergence of the gradient of a scalar field:

$$
\nabla \cdot (\nabla \varphi) = \nabla^2 \varphi = \frac{\partial^2 \varphi}{\partial x^2} + \frac{\partial^2 \varphi}{\partial y^2} + \frac{\partial^2 \varphi}{\partial z^2}
$$

$\nabla^2$ is the Laplacian operator, representing the spatial second derivative of a scalar field.

2. Curl of the gradient of a scalar field:

$$
\nabla \times (\nabla \varphi) = 0
$$

This identity shows that the curl of the gradient of a scalar field is always zero.

3. Divergence of the curl of a vector field:

$$
\nabla \cdot (\nabla \times \vec{A}) = 0
$$

This identity shows that the divergence of the curl of a vector field is always zero.

4. Curl of the curl of a vector field:

$$
\nabla \times (\nabla \times \vec{A}) = \nabla (\nabla \cdot \vec{A}) - \nabla^2 \vec{A}
$$

#### Integral Theorems

* **Gauss's Divergence Theorem:** Relates the flux of a vector field through a closed surface to the divergence of the field within the volume enclosed by the surface. For a vector field A and a closed surface S enclosing a volume V:

$$
\oint_S \vec{A} \cdot d\vec{a} = \int_V (\nabla \cdot A) \, dV
$$

* **Stokes' Theorem:** Relates the circulation of a vector field around a closed loop to the curl of the field within the surface enclosed by the loop. For a vector field A and a closed loop C enclosing a surface S:

$$
\oint_C \vec{A} \cdot d\vec{l} = \int_S (\nabla \times \vec{A}) \cdot d\vec{a}
$$

* **Gardient Theorom:** Relates the line integral of a scalar field to the gradient of the field. For a scalar field φ and a curve C:

$$
\oint_C \nabla \varphi \cdot d\vec{l} = \varphi(\vec{r}_2) - \varphi(\vec{r}_1)
$$

where $\vec{r}_1$ and $\vec{r}_2$ are the endpoints of the curve C. For a closed curve, the integral is zero.

These operations form the cornerstone for understanding and manipulating electromagnetic fields.

### The Laws that Rule: Maxwell's Equations

James Clerk Maxwell unified the previously separate laws of electricity and magnetism into a set of four fundamental equations. These equations, known as Maxwell's equations, govern the behavior of electric and magnetic fields and form the foundation of classical electromagnetism. Here's a brief overview of these equations:

1. **Gauss's Law for Electrostatics:**

Electric flux through any surface enclosing a charge is proportional to the charge enclosed:

$$
\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}
$$

where $\vec{E}$ is the electric field, $dA$ is the differential area element, and $Q_{enc}$ is the charge enclosed by the surface. $\varepsilon_0$ is the permittivity of free space. Now, applying Gauss's divergence theorem:

$$
\oint_S \vec{E} \cdot d\vec{A} = \int_V \nabla \cdot \vec{E} \, dV
$$

if $\rho$ is the charge density, then:

$$
Q_{enc} = \int_V \rho \, dV
$$

So, the differential form of Gauss's Law for Electrostatics is:

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}
$$

2. **Gauss's Law for Magnetostatics:**

Magnetic monopoles do not exist, and the magnetic field lines are always closed loops having sources and sinks. The magnetic flux through any closed surface is always zero:

$$
\oint_S \vec{B} \cdot d\vec{A} = 0
$$

The differential form of Gauss's Law for Magnetism is:

$$
\nabla \cdot \vec{B} = 0
$$

3. **Faraday's Law of Induction:**

A changing magnetic field induces an electric field which opposes the magnetic flux. The electromotive force (emf) around a closed loop is equal to the rate of change of magnetic flux through the loop:

$$
\epsilon = -\frac{d\Phi_B}{dt}
$$

where $\epsilon$ is the emf, and $\Phi_B$ is the magnetic flux through the loop. But,

$$
\Phi_B = \int_S \vec{B} \cdot d\vec{A}
$$

$$
\epsilon = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{A} = - \int_S \frac{\partial \vec{B}}{\partial t} \cdot d\vec{A}
$$

Also,

$$
\epsilon = \oint_C \vec{E} \cdot d\vec{l} = \int_S (\nabla \times \vec{E}) \cdot d\vec{A}
$$

Equating the two expressions, we get Faraday's Law of Induction in differential form:

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

4. **Ampere's Law:**

The line integral of the magnetic field around a closed loop is proportional to the current enclosed by the loop:

$$
\oint_C \vec{B} \cdot d\vec{l} = \mu_0 \, I_{enc}
$$

where $I_{enc}$ is the current enclosed by the loop, which can be written as:

$$
I_{enc} = \int_S \vec{J} \cdot d\vec{A}
$$

where $\vec{J}$ is the current density. Applying Stokes' theorem:

$$
\oint_C \vec{B} \cdot d\vec{l} = \int_S (\nabla \times \vec{B}) \cdot d\vec{A}
$$

Equating the two expressions, we get Ampere's Law in differential form:

$$
\nabla \times \vec{B} = \mu_0 \, \vec{J}
$$

where $\mu_0$ is the permeability of free space.

5. **Equation of Continuity:**

If charge $q$ is enclosed in a volume $V$ by a surface $S$, then the current $I$ flowing out of the volume is:

$$
I = - \frac{\partial q}{\partial t}
$$

But $q = \int_V \rho \, dV$, so:

$$
I = -\int_V \frac{\partial \rho}{\partial t} \, dV
$$

Applying Gauss's divergence theorem:

$$
I = \oint_S \vec{J} \cdot d\vec{A} = \int_V (\nabla \cdot \vec{J}) \, dV
$$

Equating the two expressions, we get the equation of continuity in differential form:

$$
\nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}
$$

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{J} = 0
$$

This equation ensures that charge is conserved and the conservation of charge principle states that the rate of change of charge density in a volume is equal to the net current flowing out of the volume.

6. **Problem with Ampere's Law:**

Taking divergence of both sides of Ampere's Law:

$$
\nabla \cdot (\nabla \times \vec{B}) = \nabla \cdot (\mu_0 \, \vec{J})
$$

Using vector calculus identities, we get:

$$
\nabla \cdot (\nabla \times \vec{B}) = \mu_0 \, \nabla \cdot \vec{J}
$$

But, $\nabla \cdot (\nabla \times \vec{B}) = 0$ and $\nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}$, so:

$$
0 = -\mu_0 \, \frac{\partial \rho}{\partial t}
$$

This equation implies that the charge density $\rho$ must be constant, which is not true for non-static situations. This inconsistency led Maxwell to introduce the concept of displacement current.

7. **Maxwell's Addition:**

To resolve the inconsistency in Ampere's Law, Maxwell substituted the term $\rho$ with $\varepsilon_0 \, \nabla \cdot \vec{E}$ from Gauss's Law for Electrostatics in the equation of continuity:

$$
\nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t} = -\frac{\partial}{\partial t} (\varepsilon_0 \, \nabla \cdot \vec{E})
$$

$$
\nabla \cdot \vec{J} + \frac{\partial}{\partial t} (\varepsilon_0 \, \nabla \cdot \vec{E}) = 0
$$

$$
\nabla \cdot (\vec{J} + \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}) = 0
$$

Replacing $\vec{J}$ with $\vec{J} + \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}$ in Ampere's Law, we get:

$$
\nabla \times \vec{B} = \mu_0 \, \vec{J} + \mu_0 \, \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}
$$

Therefore, the corrected Ampere's Law is:

$$
\oint_C \vec{B} \cdot d\vec{l} = \mu_0 \, I_{enc} + \mu_0 \, \varepsilon_0 \, \frac{d\Phi_E}{dt}
$$

where $\Phi_E = \int_S \vec{E} \cdot d\vec{A}$ is the electric flux through the loop.

8. **Maxwell's Equations:**

Combining the corrected Ampere's Law with the other three equations, we get the complete set of Maxwell's equations:

* Differential Form:

  $$
  \nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}
  $$

  $$
  \nabla \cdot \vec{B} = 0
  $$

  $$
  \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
  $$

  $$
  \nabla \times \vec{B} = \mu_0 \, \vec{J} + \mu_0 \, \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}
  $$
* Integral Form:

  $$
  \oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}
  $$

  $$
  \oint_S \vec{B} \cdot d\vec{A} = 0
  $$

  $$
  \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}
  $$

  $$
  \oint_C \vec{B} \cdot d\vec{l} = \mu_0 \, I_{enc} + \mu_0 \, \varepsilon_0 \, \frac{d\Phi_E}{dt}
  $$

These equations describe the behavior of electric and magnetic fields in the presence of charges and currents and form the foundation of classical electromagnetism.

In free space, there are no charges or currents, i.e., $\rho = 0$ and $\vec{J} = 0$.

### Unveiling the Potentials: Scalar and Vector Potentials

For a given vector field $\vec{G}$, we can define a scalar potential $\varphi$ and a vector potential $\vec{F}$ such that:

$$
\vec{G} = \nabla \times \vec{F}
$$

$$
\vec{G} = -\nabla \varphi
$$

So, $\nabla \cdot \vec{G} = 0$.

**Magnetic Vector Potential:**

Since $\nabla \cdot \vec{B} = 0$, we can define a vector potential $\vec{A}$ such that:

$$
\vec{B} = \nabla \times \vec{A}
$$

This is known as the magnetic vector potential.

**Electric Scalar Potential:**

Since $\nabla \times \vec{E} + \frac{\partial \vec{B}}{\partial t} = 0$,

$$
\nabla \times \vec{E} + \frac{\partial \vec{A}}{\partial t} = \nabla \times (\vec{E} + \frac{\partial \vec{A}}{\partial t}) = 0
$$

So, we can define a scalar potential $\varphi$ such that:

$$
\vec{E} = -\nabla \varphi - \frac{\partial \vec{A}}{\partial t}
$$

This is known as the electric scalar potential.

**Lorentz Gauge:**

The Lorentz gauge condition is:

$$
\nabla \cdot \vec{A} + \frac{1}{c^2} \frac{\partial \varphi}{\partial t} = 0
$$

This condition ensures that the scalar and vector potentials are uniquely defined.

**Coulomb Gauge:**

In the Coulomb gauge, the scalar potential satisfies:

$$
\nabla \cdot \vec{A} = 0
$$

This gauge condition simplifies the equations and is often used in electrostatics.

**Wave Equations in terms of Scalar Potential:**

$$
\nabla \cdot \vec{E} = 0 \implies \nabla^2 \varphi + \frac{\partial}{\partial t} (\nabla \cdot \vec{A}) = 0
$$

Using the Lorentz gauge condition, we get:

$$
\nabla^2 \varphi - \frac{1}{c^2} \frac{\partial^2 \varphi}{\partial t^2} = 0
$$

$$
\nabla^2 \varphi - \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \varphi}{\partial t^2} = 0
$$

This is the wave equation for the electric scalar potential.

**Wave Equations in terms of Vector Potential:**

$$
\nabla \times \vec{B} = \mu_0 \, \vec{J} + \mu_0 \, \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}
$$

$$
\nabla \times (\nabla \times \vec{A}) = \mu_0 \, \vec{J} + \mu_0 \, \varepsilon_0 \, \frac{\partial}{\partial t} (-\nabla \varphi - \frac{\partial \vec{A}}{\partial t})
$$

Using vector calculus identities, we get:

$$
\nabla (\nabla \cdot \vec{A}) - \nabla^2 \vec{A} = \mu_0 \, \vec{J} - \mu_0 \, \varepsilon_0 \, \frac{\partial}{\partial t} (\nabla \varphi) - \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \vec{A}}{\partial t^2}
$$

$$
\nabla (\nabla \cdot \vec{A} + \mu_0\varepsilon_0 \frac{\partial \varphi}{\partial t}) - \nabla^2 \vec{A} = \mu_0 \, \vec{J} - \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \vec{A}}{\partial t^2}
$$

But, $\nabla \cdot \vec{A} = -\frac{1}{c^2} \frac{\partial \varphi}{\partial t}$, and using the Lorentz gauge condition, we get:

$$
\nabla^2 \vec{A} - \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \, \vec{J}
$$

### The Birth of Light

Taking the curl of Faraday's Law of Induction:

$$
\nabla \times (\nabla \times \vec{E}) = -\nabla \times \frac{\partial \vec{B}}{\partial t}
$$

Using vector calculus identities, we get:

$$
\nabla (\nabla \cdot \vec{E}) - \nabla^2 \vec{E} = -\frac{\partial}{\partial t} (\nabla \times \vec{B})
$$

But, $\nabla \cdot \vec{E} = 0$ and $\nabla \times \vec{B} = \mu_0 \, \vec{J}$, so:

$$
- \nabla^2 \vec{E} = -\mu_0 \, \frac{\partial \vec{J}}{\partial t}
$$

Substituting $\vec{J} = \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t}$ from Maxwell's equations, we get:

$$
\nabla^2 \vec{E} = \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \vec{E}}{\partial t^2}
$$

This is the wave equation for the electric field. Similarly, the wave equation for the magnetic field can be showed as:

$$
\nabla^2 \vec{B} = \mu_0 \, \varepsilon_0 \, \frac{\partial^2 \vec{B}}{\partial t^2}
$$

Comparing these equations with the wave equation:

$$
\nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}
$$

where $v$ is the speed of the wave, we find that the speed of electromagnetic waves is:

$$
v = \frac{1}{\sqrt{\mu_0 \, \varepsilon_0}} = c
$$

where $c$ is the speed of light in vacuum. This derivation shows that light is an electromagnetic wave propagating at the speed of light.

### The Dancing Duo: Transverse Nature of EM Waves

The electric and magnetic fields in an electromagnetic wave are perpendicular to each other and to the direction of propagation. This transverse nature of electromagnetic waves is a consequence of Maxwell's equations and the wave equation for light.

The electric field $\vec{E}$, magnetic field $\vec{B}$, and the direction of propagation form a right-handed set of orthogonal vectors. The electric and magnetic fields oscillate perpendicular to each other and to the direction of wave propagation, creating a self-sustaining wave that propagates through space.

$$
\vec{F}(\vec{r}, t) = \vec{F_0} e^{i(\vec{k} \cdot \vec{r} - \omega t)}
$$

where $\vec{F}$ represents the electric or magnetic field, $\vec{F_0}$ is the amplitude, $\vec{k}$ is the propagation vector, $\vec{r}$ is the position vector, $\omega$ is the angular frequency, and $\omega = ck$.

$$
\vec{k} = k \hat{n} = \frac{\omega}{c} \hat{n}
$$

$$
\nabla \cdot \vec{F} = \nabla \cdot \vec{F_0} e^{i(\vec{k} \cdot \vec{r} - \omega t)} = i \vec{k} \cdot \vec{F_0} e^{i(\vec{k} \cdot \vec{r} - \omega t)} = i \vec{k} \cdot \vec{F}
$$

$$
\vec{k} \cdot \vec{E} = \vec{k} \cdot \vec{B} = 0
$$

Also,

$$
\nabla \times \vec{F} = \nabla \times \vec{F_0} e^{i(\vec{k} \cdot \vec{r} - \omega t)} = i \vec{k} \times \vec{F_0} e^{i(\vec{k} \cdot \vec{r} - \omega t)} = i \vec{k} \times \vec{F}
$$

$$
\vec{k} \times \vec{E} = \omega \vec{B}
$$

$$
\vec{k} \times \vec{B} = \omega \mu_0 \varepsilon_0 \vec{E}
$$

Taking only the magnitude of the vectors, we get:

$$
k E = \omega B \implies E = cB
$$

The wave impedance of free space is:

$$
Z = \frac{E}{B} = c
$$

Using $B = \mu_0 H$, we get:

$$
Z_0 = \frac{E}{H} = \mu c = \sqrt{\frac{\mu_0}{\varepsilon_0}} = 376.72 \, \Omega
$$

### Poynting's Theorem: The Flow of Energy

Taking the dot product of Maxwell's third equation with $\vec{B}$:

$$
\vec{B} \cdot (\nabla \times \vec{E}) = -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t}
$$

Taking the dot product of Maxwell's fourth equation with $\vec{E}$:

$$
\vec{E} \cdot (\nabla \times \vec{B}) = \vec{E} \cdot \left( \mu_0 \, \vec{J} + \mu_0 \, \varepsilon_0 \, \frac{\partial \vec{E}}{\partial t} \right)
$$

Using vector calculus identities, we get:

$$
\nabla \cdot (\vec{E} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \vec{E} \cdot (\nabla \times \vec{B})
$$

Substituting the expressions for the curl of $\vec{E}$ and $\vec{B}$, we get:

$$
\nabla \cdot (\vec{E} \times \vec{B}) = -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - (\mu_0 \, (E \cdot \vec{J}) + \mu_0 \, \varepsilon_0 \, \vec{E} \cdot \frac{\partial \vec{E}}{\partial t})
$$

$$
\nabla \cdot (\vec{E} \times \vec{B}) = -(\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} + \mu_0 \, \varepsilon_0 \, \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}) - \mu_0 \, (\vec{E} \cdot \vec{J})
$$

We can write $\vec{B} \cdot \frac{\partial \vec{B}}{\partial t}$ as $\frac{\partial}{\partial t} (\frac{1}{2} \vec{B}^2)$ and $\vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$ as $\frac{\partial}{\partial t} (\frac{1}{2} \vec{E}^2)$. So, the equation becomes:

$$
\nabla \cdot (\vec{E} \times \vec{B}) = -\frac{1}{2}\frac{\partial}{\partial t}(\vec{B}^2 + \mu_0 \, \varepsilon_0 \, \vec{E}^2) - \mu_0 \, (\vec{E} \cdot \vec{J})
$$

Rearranging the terms, we get:

$$
\vec{E} \cdot \vec{J} = -\frac{1}{2} \frac{\partial}{\partial t} (\epsilon_0 \, \vec{E}^2 + \frac{\vec{B}^2}{\mu_0}) - \frac{1}{\mu_0} \nabla \cdot (\vec{E} \times \vec{B})
$$

Integrating over a volume V, we get Poynting's theorem:

$$
\int_V (\vec{E} \cdot \vec{J}) \, dV = -\frac{d}{dt} \int_V \frac{1}{2} (\epsilon_0 \, \vec{E}^2 + \frac{\vec{B}^2}{\mu_0}) \, dV - \frac{1}{\mu_0} \oint_S (\vec{E} \times \vec{B}) \cdot d\vec{A}
$$

1. The term $\vec{E} \cdot \vec{J}$ represents the power per unit volume supplied by the electric field to the charges.
2. The term $\frac{1}{2} (\epsilon_0 \, \vec{E}^2 + \frac{\vec{B}^2}{\mu_0})$ represents the rate of change of energy density in the electric and magnetic fields.
3. The term $\vec{E} \times \vec{B}$ represents the flow of energy per unit area in the electromagnetic field.

Poynting's theorem provides a powerful tool for understanding the flow of energy in electromagnetic fields. The Poynting vector $\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$ represents the direction and magnitude of energy flow in electromagnetic waves.

**Energy in a plane electromagnetic wave:**

For a plane wave propagating in the z-direction, the Poynting vector is:

$$
\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B}) = \frac{1}{\mu_0 \omega} [\vec{E} \times (\vec{k} \times \vec{E})]
$$

$$
\vec{S} = \frac{1}{\mu_0 \omega} [E^2 \vec{k} - (\vec{E} \cdot \vec{k}) \vec{E}]
$$

Since, $\vec{E} \cdot \hat{k} = 0$, the Poynting vector simplifies to:

$$
\vec{S} = \frac{ E^2}{\mu_0 \omega} \vec{k} = \frac{E^2}{\mu_0 c} \hat{n}
$$

Over a complete cycle, the average value of the Poynting vector is:

$$
\langle \vec{S} \rangle = \frac{\langle E^2 \rangle}{\mu_0 c} \hat{n}
$$

where $\langle E^2 \rangle$ is the average value of the square of the electric field.

$$
\langle E^2 \rangle = \frac{E_0^2}{2} = E_{rms}^2
$$

Therefore, the average value of the Poynting vector is:

$$
\langle \vec{S} \rangle = \frac{E_{rms}^2}{\mu_0 c} \hat{n}
$$

This expression gives the average power per unit area carried by the electromagnetic wave.

Energy stored in an electromagnetic field is given by:

$$
U = \frac{1}{2} (\epsilon_0 \, \vec{E}^2 + \frac{\vec{B}^2}{\mu_0})
$$

But, $\vec{B} = E/c = \sqrt{\mu_0 \varepsilon_0} \, E$, so:

$$
U = \epsilon_0 \, E^2
$$

Therefore, the energy density per unit cycle is:

$$
\langle U \rangle = \epsilon_0 \, E_{rms}^2
$$

$$
\frac{\langle U \rangle}{\langle \vec{S} \rangle} = c \hat{n} \implies \langle S \rangle = c \langle U \rangle \hat{n}
$$

### Conclusion

This blog post has provided a glimpse into the fascinating world of electromagnetism, exploring vector calculus, Maxwell's equations, the derivation of the electromagnetic wave equation, and the concepts of scalar and vector potentials and Poynting's theorem. Understanding these concepts lays the foundation for delving deeper into various electromagnetic phenomena like light, radio waves, and the behavior of charged particles in electromagnetic fields. There's a whole universe waiting to be explored!
