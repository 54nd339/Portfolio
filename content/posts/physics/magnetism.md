---
title: Magnetism - The Invisible Force
description: That’s why your fridge holds notes and why MRI machines see inside you! From moving charges to invisible forces shaping our world, this post unpacks everything—from Lorentz force shenanigans to Earth's magnetic tricks. If you've ever wondered why magnets never get tired, click in for an attractive read!
date: 2023-02-10
draft: false
slug: /pensieve/physics/magnetism
tags:
  - Physics
  - Electromagnetism
---
Magnetism is a fundamental force of nature that arises from the motion of electric charges. It is characterized by the presence of magnetic fields and the interaction between magnetic materials.

### Magnetic Force

Coloumb's Law states that the force between two Magnets is given by:

$$
F = \dfrac{k m_1 m_2}{r^2} = \dfrac{\mu_0 m_1 m_2}{4\pi r^2}
$$

where $F$ is the force, $m_1$ and $m_2$ are the magnitudes of the two magnetic poles, $r$ is the distance between the poles, and $k$ is the proportionality constant.

The magnetic force on a moving charge in a magnetic field is given by the **Lorentz force law**:

$$
\vec{F} = q|\vec{v} \times \vec{B}|
$$

where $\vec{F}$ is the force, q is the charge, $\vec{v}$ is the velocity of the charge, and $\vec{B}$ is the magnetic field. The magnetic force is always perpendicular to the velocity and the magnetic field.

#### Motion of Charged Particles in Magnetic Fields

When a charged particle moves in a magnetic field, it experiences a magnetic force that causes it to move in a circular or helical path. The radius of the path is determined by the charge, velocity, and magnetic field strength.

Let us consider a charge moving in a magnetic field at an angle $\theta$ to the field. The force acting is always perpendicular to the velocity and the magnetic field, hence the charge moves in a helical path.

![Magnetic Force on a Charge](https://cdn1.byjus.com/wp-content/uploads/2020/11/Motion-of-a-charged-particle-in-magnetic-field-.png)

The magnetic force acts as a centripetal force, hence:

$$
q v B \sin \theta = \dfrac{m v^2}{R} \implies R = \dfrac{m v}{q B} \csc \theta
$$

Angular frequency of the particle is given by $\omega = \dfrac{v}{R} = \dfrac{q B}{m} \sin \theta$.

Time period of revolution is given by $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi m}{q B} \csc \theta$.

Let's assign coordinates to the system. Let the magnetic field be along the x-axis and the velocity of the charge is in x-y plane [$v = v (\cos \theta \hat{i} + \sin \theta \hat{j})$]. The force acting on the charge is $q v B \hat{k}$. The circle is in y-z plane. The equation of motion is given by:

$$
r_x = vt \cos \theta
$$

$$
r_y = R (1 - \cos \omega t)
$$

$$
r_z = R \sin \omega t
$$

- Case 1: if $\theta = 0 \implies r_x = vt \, \text{and} \, F = 0$ So, $r_y = 0, r_z = 0$.
- Case 2: if $\theta = \dfrac{\pi}{2} \implies r_x = 0$. So, $r_y = R \sin \omega t, r_z = R (1 - \cos \omega t)$. The particle moves in a circle in y-z plane.

#### Motion of a Charged Particle in Combined Electric and Magnetic Fields

The Lorentz force law for a charged particle moving in both electric and magnetic fields is given by:

$$
\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})
$$

The particle moves in a helical or spiral path due to the combined effect of the electric and magnetic fields. The motion of the particle is determined by the relative strengths and directions of the electric and magnetic fields.

Let $v$, $E$ and $B$ be given by:

$$
v = v_x \hat{i} + v_y \hat{j} + v_z \hat{k}
$$

$$
E = E_x \hat{i} + E_y \hat{j} + E_z \hat{k}
$$

$$
B = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}
$$

The force acting on the charge is given by:

$$
F = q(E_x \hat{i} + E_y \hat{j} + E_z \hat{k}) + q(v_x \hat{i} + v_y \hat{j} + v_z \hat{k}) \times (B_x \hat{i} + B_y \hat{j} + B_z \hat{k})
$$

$$
F = q[(E_x + v_y B_z − v_z B_y) \hat{i} + (E_y + v_z B_x − v_x B_z) \hat{j} + (E_z + v_x B_y − v_y B_x) \hat{k}]
$$

The acceleration of the charge is given by:

$$
a = \dfrac{F}{m} = \dfrac{q}{m}[(E_x + v_y B_z − v_z B_y) \hat{i} + (E_y + v_z B_x − v_x B_z) \hat{j} + (E_z + v_x B_y − v_y B_x) \hat{k}]
$$

The motion is described by these three coupled equations:

$$
\dfrac{dv_x}{dt} = \dfrac{q}{m}(E_x + v_y B_z − v_z B_y)
$$

$$
\dfrac{dv_y}{dt} = \dfrac{q}{m}(E_y + v_z B_x − v_x B_z)
$$

$$
\dfrac{dv_z}{dt} = \dfrac{q}{m}(E_z + v_x B_y − v_y B_x)
$$

- Case 1: $v_x \perp E_y \perp B_z$:

  - Let $v = v_0 \hat{i}$, $E = E_0 \hat{j}$ and $B = B_0 \hat{k}$. The equation of motion is given by:

    $$
    \dfrac{dv_x}{dt} = \dfrac{q}{m}(v_y(t) B_0) = \omega v_y(t)
    $$

    $$
    \dfrac{dv_y}{dt} = \dfrac{q}{m}(E_0 − v_x(t) B_0) = \omega \left( \frac{E_0}{B_0} - v_x(t) \right)
    $$
  - Solving the equations:

    - Differentiating the first equation w.r.t. $t$, we get:

      $$
      \dfrac{d^2v_x}{dt^2} = \omega \dfrac{dv_y}{dt} = \omega^2 \left( \frac{E_0}{B_0} − v_x(t) \right)
      $$

      $$
      \implies \dfrac{d^2v_x}{dt^2} + \omega^2 v_x = \omega^2 \dfrac{E_0}{B_0}
      $$

      $$
      \implies v_x = A \cos (\omega t) + B \sin (\omega t) + \dfrac{E_0}{B_0}
      $$
    - Substituting $v_x$ in the second equation, we get:

      $$
      v_y = \int \omega \left( \frac{E_0}{B_0} - v_x(t) \right) dt = \int \omega \left( \frac{E_0}{B_0} - A \cos (\omega t) - B \sin (\omega t) - \dfrac{E_0}{B_0} \right) dt
      $$

      $$
      \implies v_y = -A \sin (\omega t) + B \cos (\omega t) + C
      $$
    - Initial Condition: $v_x(0) = v_0$ and $v_y(0) = 0$. So, $A = v_0 - \frac{E_0}{B_0}$ and $B = C = 0$. Therefore:

      $$
      v_x = (v_0 - \frac{E_0}{B_0}) \cos (\omega t) + \frac{E_0}{B_0}
      $$

      $$
      v_y = - (v_0 - \frac{E_0}{B_0}) \sin (\omega t)
      $$
    - Position of the particle is given by:

      $$
      r_x = \int v_x dt = \frac{E_0}{B_0} t + \frac{v_0 - \frac{E_0}{B_0}}{\omega} \sin (\omega t) + C_x
      $$

      $$
      r_y = \int v_y dt = \frac{v_0 - \frac{E_0}{B_0}}{\omega} \cos (\omega t) + C_y
      $$
    - As the initial position of the particle is $(0,0)$, $C_x = 0$ and $C_y = -\frac{A}{\omega}$. When $v_0 = 0$:

      $$
      r_x = \frac{E_0}{B_0 \omega} (\omega t - \sin(\omega t))
      $$

      $$
      r_y = \frac{E_0}{B_0 \omega} (1 - \cos (\omega t))
      $$
    - The particle moves in a cycloid path in the x-y plane when $v_0 = 0$.
- Case 2: $v_x \parallel E_x \perp B_z$:

  - Let $v = v_0 \hat{i}$, $E = E_0 \hat{i}$ and $B = B_0 \hat{k}$. The equation of motion is given by:

    $$
    \dfrac{dv_x}{dt} = \dfrac{q}{m}(E_0 + v_y B_0) = \omega \left( \frac{E_0}{B_0} + v_y(t) \right)
    $$

    $$
    \dfrac{dv_y}{dt} = - \dfrac{q}{m}(v_x B_0) = -\omega v_x(t)
    $$
  - Solving the equations:

    - Differentiating the second equation w.r.t. $t$, we get:

      $$
      \dfrac{d^2v_y}{dt^2} = -\omega \dfrac{dv_x}{dt} = -\omega^2 \left( \frac{E_0}{B_0} + v_y(t) \right)
      $$

      $$
      \implies \dfrac{d^2v_y}{dt^2} + \omega^2 v_y = -\omega^2 \dfrac{E_0}{B_0}
      $$

      $$
      \implies v_y = A \cos (\omega t) + B \sin (\omega t) - \dfrac{E_0}{B_0}
      $$
    - Substituting $v_y$ in the first equation, we get:

      $$
      v_x = \int \omega \left( \frac{E_0}{B_0} + v_y(t) \right) dt = \int \omega \left( \frac{E_0}{B_0} + A \cos (\omega t) + B \sin (\omega t) - \dfrac{E_0}{B_0} \right) dt
      $$

      $$
      \implies v_x = A \sin (\omega t) - B \cos (\omega t) + C
      $$
    - **Case 2.1:**

      - Initial Condition: $v_x(0) = v_0$ and $v_y(0) = 0$. So, $A = \frac{E_0}{B_0}$, $B = -v_0$ and $C = 0$. Therefore:

        $$
        v_x = \frac{E_0}{B_0} \sin (\omega t) + v_0 \cos (\omega t)
        $$

        $$
        v_y = \frac{E_0}{B_0} (\cos (\omega t) - 1) - v_0 \sin (\omega t)
        $$
      - Position of the particle is given by:

        $$
        r_x = \int v_x dt = -\frac{E_0}{B_0 \omega} \cos (\omega t) + \frac{v_0}{\omega} \sin (\omega t) + C_x
        $$

        $$
        r_y = \int v_y dt = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t) + \frac{v_0}{\omega} \cos (\omega t) + C_y
        $$
      - As the initial position of the particle is $(0,0)$, $C_x = \frac{E_0}{B_0 \omega}$ and $C_y = -\frac{v_0}{\omega}$. Therefore:

        $$
        r_x = \frac{E_0}{B_0 \omega} (1 - \cos (\omega t)) + \frac{v_0}{\omega} \sin (\omega t)
        $$

        $$
        r_y = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t) - \frac{v_0}{\omega} (1 - \cos (\omega t))
        $$
    - **Case 2.2:**

      - Initial Condition: $v_x(0) = v_0$ and $v_y(0) = 0$. So, $A = \frac{E_0}{B_0}$, $B = 0$ and $C = v_0$. Therefore:

        $$
        v_x = \frac{E_0}{B_0} \sin (\omega t) + v_0
        $$

        $$
        v_y = \frac{E_0}{B_0} (\cos (\omega t) - 1)
        $$
      - Position of the particle is given by:

        $$
        r_x = \int v_x dt = -\frac{E_0}{B_0 \omega} \cos (\omega t) + v_0t + C_x
        $$

        $$
        r_y = \int v_y dt = \frac{E_0}{B_0 \omega} \sin (\omega t) - \frac{E_0}{B_0}t + C_y
        $$
      - As the initial position of the particle is $(0,0)$, $C_x = \frac{E_0}{B_0 \omega}$ and $C_y = 0$. Therefore:

        $$
        r_x = \frac{E_0}{B_0 \omega} (1 - \cos (\omega t)) + v_0 t
        $$

        $$
        r_y = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t)
        $$
    - When $v_0 = 0$:

      $$
      r_x = \frac{E_0}{B_0 \omega} (1 - \cos (\omega t))
      $$

      $$
      r_y = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t)
      $$
    - The particle moves in a cycloid path in the x-y plane when $v_0 = 0$.
- Case 3: $v_x \perp E_y \parallel B_y$:

  - Let $v = v_0 \hat{i}$, $E = E_0 \hat{j}$ and $B = B_0 \hat{j}$. The equation of motion is given by:

    $$
    \dfrac{dv_x}{dt} = -\dfrac{q}{m}(v_z B_0) = -\omega v_z(t)
    $$

    $$
    \dfrac{dv_y}{dt} = \dfrac{q}{m}(E_0)
    $$

    $$
    \dfrac{dv_z}{dt} = \dfrac{q}{m}(v_x B_0) = \omega v_x(t)
    $$
  - Solving the equations:

    - Differentiating the first equation w.r.t. $t$, we get:

      $$
      \dfrac{d^2v_x}{dt^2} = -\omega \dfrac{dv_z}{dt} = -\omega^2 v_x(t)
      $$

      $$
      \implies v_x = A \cos (\omega t) + B \sin (\omega t)
      $$
    - Substituting $v_x$ in the third equation, we get:

      $$
      v_z = \int \omega v_x(t) dt = \int \omega (A \cos (\omega t) + B \sin (\omega t)) dt
      $$

      $$
      \implies v_z = A \sin (\omega t) - B \cos (\omega t) + C
      $$
    - Initial Condition: $v_x(0) = v_0$ and $v_z(0) = 0$. So, $A = v_0$ and $B = C = 0$. Therefore:

      $$
      v_x = v_0 \cos (\omega t)
      $$

      $$
      v_y = \frac{q}{m}E_0t
      $$

      $$
      v_z = v_0 \sin (\omega t)
      $$
    - Position of the particle is given by:

      $$
      r_x = \int v_x dt = \frac{v_0}{\omega} \sin (\omega t) + C_x
      $$

      $$
      r_y = \int v_y dt = \frac{q}{2m}E_0t^2 + C_y
      $$

      $$
      r_z = \int v_z dt = -\frac{v_0}{\omega} \cos (\omega t) + C_z
      $$
    - As the initial position of the particle is $(0,0,0)$, $C_x = C_y = 0$ and $C_z = \frac{v_0}{\omega}$. Therefore:

      $$
      r_x = \frac{v_0}{\omega} \sin (\omega t)
      $$

      $$
      r_y = \frac{q}{2m}E_0t^2
      $$

      $$
      r_z = \frac{v_0}{\omega} (1 - \cos (\omega t))
      $$
    - The particle moves in a helical path when $v_0 \neq 0$. The particle moves in a straight line when $v_0 = 0$.
- Case 4: $v_x \parallel B_x \perp E_y$:

  - Let $v = v_0 \hat{i}$, $E = E_0 \hat{j}$ and $B = B_0 \hat{i}$. The equation of motion is given by:

    $$
    \dfrac{dv_y}{dt} = \dfrac{q}{m}(E_0 + v_z B_0) = \omega \left( \frac{E_0}{B_0} + v_z(t) \right)
    $$

    $$
    \dfrac{dv_z}{dt} = -\dfrac{q}{m}(v_y B_0) = -\omega v_y(t)
    $$
  - Solving the equations:

    - Differentiating the second equation w.r.t. $t$, we get:

      $$
      \dfrac{d^2v_z}{dt^2} = -\omega \dfrac{dv_y}{dt} = -\omega^2 \left( \frac{E_0}{B_0} + v_z(t) \right)
      $$

      $$
      \implies \dfrac{d^2v_z}{dt^2} + \omega^2 v_z = -\omega^2 \dfrac{E_0}{B_0}
      $$

      $$
      \implies v_z = A \cos (\omega t) + B \sin (\omega t) - \dfrac{E_0}{B_0}
      $$
    - Substituting $v_z$ in the first equation, we get:

      $$
      v_y = \int \omega \left( \frac{E_0}{B_0} + v_z(t) \right) dt = \int \omega \left( \frac{E_0}{B_0} + A \cos (\omega t) + B \sin (\omega t) - \dfrac{E_0}{B_0} \right) dt
      $$

      $$
      \implies v_y = A \sin (\omega t) - B \cos (\omega t) + C
      $$
    - Initial Condition: $v_y(0) = v_0$ and $v_z(0) = 0$. So, $A = \frac{E_0}{B_0}$, $B = C = 0$. Therefore:

      $$
      v_x = v_0
      $$

      $$
      v_y = \frac{E_0}{B_0} \sin (\omega t)
      $$

      $$
      v_z = \frac{E_0}{B_0} \left(\cos (\omega t) - 1\right)
      $$
    - Position of the particle is given by:

      $$
      r_x = \int v_x dt = v_0 t + C_x
      $$

      $$
      r_y = \int v_y dt = -\frac{E_0}{B_0 \omega} cos (\omega t) + C_y
      $$

      $$
      r_z = \int v_z dt = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t) + C_z
      $$
    - As the initial position of the particle is $(0,0,0)$, $C_x = 0$, $C_y = \frac{E_0}{B_0 \omega}$ and $C_z = 0$. Therefore:

      $$
      r_x = v_0 t
      $$

      $$
      r_y = \frac{E_0}{B_0 \omega} (1 - \cos (\omega t))
      $$

      $$
      r_z = \frac{E_0}{B_0 \omega} (\sin (\omega t) - \omega t)
      $$
    - The particle moves in a helical path when $v_0 \neq 0$. The particle moves in a cycloid path when $v_0 = 0$.
- Case 5: $v_x \parallel E_x \parallel B_x$:

  - Let $v = v_0 \hat{i}$, $E = E_0 \hat{i}$ and $B = B_0 \hat{i}$. The equation of motion is given by:

    $$
    \dfrac{dv_x}{dt} = \dfrac{q}{m}(E_0)
    $$

    $$
    \dfrac{dv_y}{dt} = \dfrac{q}{m}(v_z B_0) = \omega v_z(t)
    $$

    $$
    \dfrac{dv_z}{dt} = -\dfrac{q}{m}(v_y B_0) = -\omega v_y(t)
    $$
  - Solving the equations:

    - Differentiating the second equation w.r.t. $t$, we get:

      $$
      \dfrac{d^2v_y}{dt^2} = \omega \dfrac{dv_z}{dt} = -\omega^2 v_y(t)
      $$

      $$
      \implies v_y = A \cos (\omega t) + B \sin (\omega t)
      $$
    - Substituting $v_y$ in the third equation, we get:

      $$
      v_z = -\int \omega v_y(t) dt = -\int \omega (A \cos (\omega t) + B \sin (\omega t)) dt
      $$

      $$
      \implies v_z = -A \sin (\omega t) + B \cos (\omega t) + C
      $$
    - Initial Condition: $v_y(0) = v_0$ and $v_z(0) = 0$. So, $A = B = C = 0$. Therefore:

      $$
      v_x = v_0 + \frac{q}{m}E_0 t
      $$

      $$
      v_y = v_z = 0
      $$
    - Position of the particle is given by:

      $$
      r_x = \int v_x dt = v_0 t + \frac{q}{2m}E_0 t^2 + C_x
      $$

      $$
      r_y = \int v_y dt = C_y
      $$

      $$
      r_z = \int v_z dt = C_z
      $$
    - As the initial position of the particle is $(0,0,0)$, $C_x = C_y = C_z = 0$. Therefore:

      $$
      r_x = v_0 t + \frac{q}{2m}E_0 t^2
      $$

      $$
      r_y = r_z = 0
      $$
    - The particle moves in a straight line affected by the electric field. Magnetic field has no effect on the particle.

#### Magnetic Force on a Current-Carrying Wire

When a current-carrying wire is placed in a magnetic field, it experiences a magnetic force that causes it to move or rotate. The force on the wire is given by:

$$
\vec{F} = I \vec{l} \times \vec{B}
$$

where $\vec{F}$ is the force, $I$ is the current, $\vec{l}$ is the length of the wire, and $\vec{B}$ is the magnetic field. The direction of the force is given by the right-hand rule.

The torque on the wire is given by:

$$
\vec{\tau} = \vec{r} \times \vec{F} = I \vec{r} \times (\vec{l} \times \vec{B})
$$

where $\vec{\tau}$ is the torque, $\vec{r}$ is the position vector, and the cross product is taken over the length of the wire.

Magnetic moment of the wire is given by:

$$
\vec{m} = I \vec{A}
$$

where $\vec{m}$ is the magnetic moment and $\vec{A}$ is the area vector of the loop.

The magnetic force and torque on a current-carrying wire are used in various applications, such as electric motors, generators, and transformers.

### Magnetic Fields

Magnetic fields are regions of space where magnetic forces are exerted on magnetic materials and moving charges. Magnetic fields are represented by field lines that point from the north pole to the south pole of a magnet. The strength of the magnetic field is measured in Tesla (T).

The magnetic field due to a current-carrying wire is given by the **Biot-Savart law**:

$$
\vec{B} = \dfrac{\mu_0}{4\pi} \int \dfrac{I d\vec{l} \times \hat{r}}{r^2}
$$

where $\vec{B}$ is the magnetic field, $\mu_0$ is the permeability of free space, $I$ is the current, $d\vec{l}$ is the differential length element, and the integral is taken over the entire length of the wire. The direction of the magnetic field is given by the right-hand rule.

#### Case Study: Magnetic Field due to a Straight Wire

![Magnetic Field due to a Straight Wire](https://cdn1.byjus.com/wp-content/uploads/2021/04/straight-conductor-image-1.png)

The magnetic field due to a straight wire carrying current I is given by:

$$
B = \dfrac{\mu_0 I}{4\pi} \int \dfrac{dl \sin \theta}{r^2}
$$

But, $dl \sin \theta = r \sin d\phi \approx r d\phi$ and $R = r \cos \phi$. So,

$$
B = \dfrac{\mu_0 I}{4\pi} \int^{\phi_2}_{-\phi_1} \dfrac{d\phi}{r} = \dfrac{\mu_0 I}{4\pi} \int^{\phi_2}_{-\phi_1} \dfrac{cos \phi d\phi}{R} = \dfrac{\mu_0 I}{4\pi R} [sin \phi_2 + sin \phi_1]
$$

Therefore, for a infinite wire, $\phi_1 = \phi_2 = \dfrac{\pi}{2}$. So,

$$
B = \dfrac{\mu_0 I}{2\pi R}
$$

If, the wire is finite, $\phi_1 = \phi_2 = \phi$ and length of the wire is $2L$, $sin \phi = \dfrac{L}{\sqrt{R^2 + L^2}}$. So,

$$
B = \dfrac{\mu_0 I}{2\pi R} sin \phi = \dfrac{\mu_0 I}{2\pi R} \dfrac{L}{\sqrt{R^2 + L^2}}
$$

**For a curved wire**, $d\theta = \dfrac{dl}{R} \implies dl = R d\theta$. So,

$$
B = \dfrac{\mu_0 I}{4\pi} \int \dfrac{R d\theta}{R^2} = \dfrac{\mu_0 I}{4\pi R} \int d\theta = \dfrac{\mu_0 I}{4\pi R} \theta
$$

#### Case Study: Magnetic Field due to a Circular Loop

![Magnetic Field due to a Circular Loop](https://cdn1.byjus.com/wp-content/uploads/2021/08/word-image10.png)

We know, $r^2 = x^2 + R^2$ and $\theta = \dfrac{\pi}{2}$ as any element of the loop will be perpendicular to the displacement vector from the element to the axial point.

$$
B = \dfrac{\mu_0 I}{4\pi} \int \dfrac{dl}{r^2} = \dfrac{\mu_0 I}{4\pi} \int \dfrac{dl}{x^2 + R^2}
$$

A null result is obtained when the components perpendicular to the x-axis are summed over, and they cancel out. The $dB_⊥$ component due to $dl$ is cancelled by the contribution due to the diametrically opposite $dl$ element. Hence, only the x-component survives. The net contribution along the x-direction can be obtained by integrating $dB_x = dB\cos\theta$ over the loop. Therefore,

$$
B = \dfrac{\mu_0 I}{4\pi} \int \dfrac{dl}{(x^2 + R^2)} \dfrac{R}{\sqrt{x^2+R^2}} = \dfrac{\mu_0IR * 2 \pi R}{4\pi(x^2+R^2)^{\frac{3}{2}}} = \dfrac{\mu_0IR^2}{2(x^2+R^2)^{\frac{3}{2}}}
$$

At the center of the loop, $x = 0$ and $B = \dfrac{\mu_0I}{2R}$.

#### Magnetic Field due to other shapes

- Magnetic Fields due to cylinder: $B = \dfrac{\mu_0 I r}{2\pi R^2}$ (inside) and $B = \dfrac{\mu_0 I}{2\pi R}$ (outside).
- Magnetic Fields due to solenoid: $B = \dfrac{\mu_0 n I}{2} (\sin \alpha_1 + \sin \alpha_2)$.
- Magnetic Fields due to toroid: $B = \dfrac{\mu_0 n I}{2\pi R}$. (as $\oint \vec{B} \cdot d\vec{l} = \mu_0 n I_{\text{enc}}$)
- Magnetic Fields due to n-sided polygon:
  ![Magnetic Field due to n-sided polygon](https://search-static.byjusweb.com/question-images/aakash_pdf/99996188233-0-0)

**Magnetic Flux:** Magnetic flux ($\Phi_B$) is a measure of the flow of magnetic field through a surface. It is defined as the product of the magnetic field and the area of the surface:

$$
\Phi_B = \int \vec{B} \cdot d\vec{A}
$$

where $\vec{B}$ is the magnetic field, $d\vec{A}$ is the differential area element, and the integral is taken over the entire surface.

#### Earth's Magnetic Field

Earth's magnetic field is generated by the motion of molten iron in the outer core. The magnetic field is approximately a dipole field, with the north magnetic pole near the geographic south pole and the south magnetic pole near the geographic north pole. The strength of the magnetic field is about 25 to 65 microteslas (µT) near the surface of the Earth.

The Earth's magnetic field is important for navigation, as it allows compasses to align with the magnetic field lines. It also protects the Earth from harmful solar radiation and cosmic rays by deflecting charged particles in the solar wind.

Let Earth's magnetic field be B,

The horizontal component of the Earth's magnetic field is given by: $B_H = B \cos \theta$

The vertical component of the Earth's magnetic field is given by: $B_V = B \sin \theta$

The total intensity of the Earth's magnetic field is given by: $B_T = \sqrt{B_H^2 + B_V^2}$

The angle between the horizontal component of the Earth's magnetic field and the magnetic meridian is called the inclination ($\theta$): $\tan \theta = \dfrac{B_V}{B_H}$

Apparent dip angle ($\delta$) is the angle between the magnetic field and the horizontal plane: $\tan \delta = \dfrac{B_V}{B_T} = \dfrac{B_V}{B_H \cos \beta} = \dfrac{\tan \theta}{\cos \beta}$

### Electromagnetic Induction

**Faraday's Law:** Faraday's law of electromagnetic induction states that a changing magnetic field induces an electromotive force (emf) in a closed loop. The induced emf is proportional to the rate of change of magnetic flux through the loop:

$$
\mathcal{E} \propto \dfrac{d\Phi_B}{dt}
$$

where $\mathcal{E}$ is the induced emf and $\Phi_B$ is the magnetic flux. Faraday's law is used to generate electricity in power plants and electric generators.

**Lenz's Law:** Lenz's law states that the direction of the induced emf in a closed loop is such that it opposes the change in magnetic flux that produced it. Lenz's law ensures that energy is conserved in electromagnetic systems.

$$
\mathcal{E} = - \dfrac{d\Phi_B}{dt}
$$

**Self-Inductance:** Self-inductance is a property of a circuit that describes how the circuit opposes changes in current flow. It is measured in Henrys (H) and is related to the rate of change of current in the circuit.

**Mutual Inductance:** Mutual inductance is a property of two circuits that describes how changes in current in one circuit induce an emf in the other circuit. It is measured in Henrys (H) and is related to the rate of change of current in the two circuits.

### Magnetic Instruments

#### Inductors

Inductors are passive electrical components that store energy in a magnetic field. They are characterized by their inductance and resistance.

$$
V = L \dfrac{dI}{dt}
$$

where $V$ is the voltage across the inductor, $L$ is the inductance, and $I$ is the current flowing through the inductor.

Energy stored in the inductor is given by:

$$
U = \dfrac{1}{2} L I^2
$$

This equation shows that the energy stored in an inductor is proportional to the square of the current flowing through it.

This can be derived from the work done in moving a charge $dq$ through a potential difference $V$:

$$
dW = \int V dq = \int L \dfrac{dI}{dt} dq = \int L I dI = \dfrac{1}{2} L I^2
$$

**Series and Parallel Inductors:** Inductors in series add up to give the total inductance, while inductors in parallel add up reciprocally to give the total inductance.

In series, the rate of change of current is the same, and the potential difference across each inductor is proportional to its inductance:

$$
V = V_1 + V_2 + \ldots
$$

$$
L \dfrac{dI}{dt} = L_1 \dfrac{dI}{dt} + L_2 \dfrac{dI}{dt} + \ldots
$$

$$
L = L_1 + L_2 + \ldots
$$

In parallel, the potential difference across each inductor is the same, and the total current is proportional to the reciprocal of the total inductance:

$$
V = V_1 = V_2 = \ldots
$$

$$
\dfrac{dI}{dt} = \dfrac{dI_1}{dt} + \dfrac{dI_2}{dt} + \ldots
$$

$$
\dfrac{V}{L} = \dfrac{V_1}{L_1} + \dfrac{V_2}{L_2} + \ldots
$$

$$
\dfrac{1}{L} = \dfrac{1}{L_1} + \dfrac{1}{L_2} + \ldots
$$

**LR Circuits:** LR circuits are circuits that contain resistors and inductors. The behavior of LR circuits is governed by the rate of change of current in the circuit.

$$
L \dfrac{dI}{dt} + I(t) \, R = 0
$$

$$
\int \dfrac{dI}{I(t)} = -\int \dfrac{R}{L}dt
$$

$$
\ln I(t) = -\dfrac{R}{L}t + \ln K
$$

$$
I(t) = K e^{-\dfrac{R}{L}t}
$$

when $t = 0$, $I(0) = K = I_0$. Therefore,

$$
I(t) = I_0 e^{-\dfrac{R}{L}t}
$$

When the above circuit is connected to a battery of voltage $V$, the equation becomes:

$$
V - I(t) \, R = L \dfrac{dI}{dt}
$$

$$
\dfrac{V - I(t) \, R}{L} = \dfrac{dI}{dt}
$$

$$
\int \dfrac{dI}{I(t) - \dfrac{V}{R}} = -\int \dfrac{R}{L} dt
$$

$$
\int \dfrac{dI}{I(t) - I_0} = -\int \dfrac{R}{L} dt
$$

$$
\ln (I(t) - I_0) = -\dfrac{R}{L}t + \ln K
$$

$$
I(t) = I_0 + K e^{-\dfrac{R}{L}t}
$$

when $t = 0$, $I(0) = I_0 + K = 0 \implies K = -I_0$. Therefore,

$$
I(t) = I_0 (1 - e^{-\dfrac{R}{L}t})
$$

**Time Constant:** The time constant ($\tau$) is a measure of how quickly the current changes in the circuit. A smaller time constant indicates a faster change in current, while a larger time constant indicates a slower change in current. It is given by:

$$
\tau = \dfrac{L}{R}
$$

when $t = \tau$, $I(t) = I_0 (1 - e^{-1}) = 0.632 I_0$. The current reaches $63.2\%$ of its final value after one time constant.

**LC Circuits:** LC circuits are circuits that contain capacitors and inductors. The behavior of LC circuits is governed by the rate of change of voltage across the capacitor.

$$
L \dfrac{dI}{dt} + \dfrac{Q(t)}{C} = 0
$$

$$
\dfrac{d^2Q}{dt^2} + \dfrac{Q(t)}{LC} = 0
$$

Let $Q(t) = e^{r t}$. Then, $\dfrac{dQ}{dt} = r e^{r t}$ and $\dfrac{d^2Q}{dt^2} = r^2 e^{r t}$. Substituting in the above equation, we get:

$$
r^2 e^{r t} + \dfrac{e^{r t}}{LC} = 0
$$

$$
r^2 + \dfrac{1}{LC} = 0
$$

$$
r = \pm i\dfrac{1}{\sqrt{LC}}
$$

Let $\omega = \dfrac{1}{\sqrt{LC}}$. We notice the roots are imaginary. Therefore, the solution is given by:

$$
Q(t) = c_1 \cos (\omega t) + c_2 \sin (\omega t)
$$

When $Q(0) = Q_0$ and $I_0 = \dfrac{dQ}{dt}(0) = 0$, $c_1 = Q_0$ and $c_2 = 0$. Therefore,

$$
Q(t) = Q_0 \cos (\omega t)
$$

$$
I(t) = \dfrac{dQ}{dt} = -Q_0 \omega \sin (\omega t)
$$

The negative sign indicates that the current is in the opposite direction to the charge.

When the above circuit is connected to a battery of voltage $V$, the equation becomes:

$$
V = L \dfrac{dI}{dt} + \dfrac{Q(t)}{C} = L \dfrac{d^2Q}{dt^2} + \dfrac{Q(t)}{C}
$$

For particular solution, we notice the forcing term V is a constant. As the forcing term is a constant, we try a constant particular solution $Q_p(t) = Q_p$. Substituting in the above equation, we get:

$$
V = \dfrac{Q_p}{C} \implies Q_p = CV
$$

The general solution is given by:

$$
Q(t) = c_1 \cos (\omega t) + c_2 \sin (\omega t) + CV
$$

When $t = 0$, $Q(0) = c_1 + CV = 0 \implies c_1 = -CV$. And $I(0) = 0 \implies c_2 = 0$. Therefore,

$$
Q(t) = CV (1 - \cos (\omega t))
$$

$$
I(t) = \dfrac{dQ}{dt} = V \sqrt{\dfrac{C}{L}} \sin (\omega t)
$$

**RLC Circuits:** RLC circuits are circuits that contain resistors, inductors, and capacitors. The behavior of RLC circuits is governed by the rate of change of current in the circuit.

$$
L \dfrac{dI}{dt} + I(t) \, R + \dfrac{Q(t)}{C} = 0
$$

$$
L\dfrac{d^2Q}{dt^2} + \dfrac{dQ}{dt} \, R + \dfrac{Q(t)}{C} = 0
$$

Let $Q(t) = e^{r t}$. Then, $\dfrac{dQ}{dt} = r e^{r t}$ and $\dfrac{d^2Q}{dt^2} = r^2 e^{r t}$. Substituting in the above equation, we get:

$$
L \, r^2 e^{r t} + r e^{r t} \, R + \dfrac{e^{r t}}{C} = 0
$$

$$
L r^2 + r R + \dfrac{1}{C} = 0
$$

$$
r = \dfrac{-R \pm \sqrt{R^2 - \dfrac{4L}{C}}}{2}
$$

Let $r_1 = \dfrac{-R + \sqrt{R^2 - \dfrac{4L}{C}}}{2}$ and $r_2 = \dfrac{-R - \sqrt{R^2 - \dfrac{4L}{C}}}{2}$. The solution is given by:

$$
Q(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}
$$

$$
I(t) = \dfrac{dQ}{dt} = r_1 c_1 e^{r_1 t} + r_2 c_2 e^{r_2 t}
$$

At t = 0, let charge on the capacitor be $Q_0$ and current be $I_0$. Therefore, $c_1 + c_2 = Q_0$ and $r_1 c_1 + r_2 c_2 = I_0$. Therefore,

$$
c_1 = \dfrac{I_0 + r_2 Q_0}{r_1 - r_2}
$$

$$
c_2 = -\dfrac{I_0 +(2r_2 - r_1) Q_0}{r_1 - r_2}
$$

When the above circuit is connected to a battery of voltage $V$, the equation becomes:

$$
V = L \dfrac{dI}{dt} + I(t) \, R + \dfrac{Q(t)}{C} = L \dfrac{d^2Q}{dt^2} + R \dfrac{dQ}{dt} + \dfrac{Q(t)}{C}
$$

For particular solution, we notice the forcing term V is a constant. As the forcing term is a constant, we try a constant particular solution $Q_p(t) = Q_p$. Substituting in the above equation, we get:

$$
V = \dfrac{Q_p}{C} \implies Q_p = CV
$$

The general solution is given by:

$$
Q(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t} + CV
$$

When $t = 0$, $c_1 + c_2 + CV = Q_0 \implies c_1 + c_2 = Q_0 - CV$. And $r_1 c_1 + r_2 c_2 = I_0$. Therefore,

$$
c_1 = \dfrac{I_0 + r_2 (Q_0 - CV)}{r_1 - r_2}
$$

$$
c_2 = -\dfrac{I_0 + (2r_2 - r_1) (Q_0 - CV)}{r_1 - r_2}
$$

Case 1: $R^2 > \dfrac{4L}{C}$

- $r_1$ and $r_2$ are real and distinct. The solution is given by:

$$
Q(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t} + CV
$$

The response is overdamped, non-oscillatory, and decays to zero.

Case 2: $R^2 = \dfrac{4L}{C}$

- $r_1$ and $r_2$ are real and equal. The solution is given by:

$$
Q(t) = c e^{r t} + CV
$$

The response is critically damped, non-oscillatory, and decays to zero.

Case 3: $R^2 < \dfrac{4L}{C}$

- $r_1$ and $r_2$ are complex conjugates. The solution is given by:

$$
Q(t) = e^{-\dfrac{R}{2L}t} (c_1 \cos (\omega t) + c_2 \sin (\omega t)) + CV
$$

where $\omega = \sqrt{\dfrac{1}{LC} - \dfrac{R^2}{4L^2}}$. The response is underdamped, oscillatory, and decays to zero.

#### Galvanometer

Galvanometers are devices that detect and measure small electric currents. They consist of a coil of wire suspended in a magnetic field. When a current flows through the coil, it experiences a torque that causes it to rotate. The angle of rotation is proportional to the current flowing through the coil.

$$
\tau = N \, B \, I \, A \, \sin \theta
$$

where $\tau$ is the torque, $N$ is the number of turns in the coil, $B$ is the magnetic field, $I$ is the current, $A$ is the area of the coil, and $\theta$ is the angle of rotation.

Current sensitivity of the galvanometer is given by:

$$
S = \dfrac{\theta}{I} = \dfrac{N \, B \, A}{\kappa}
$$

where $\kappa$ is the restoring torque per unit twist.

Voltage sensitivity of the galvanometer is given by:

$$
S = \dfrac{\theta}{V} = \dfrac{N \, B \, A}{\kappa}
$$

where $V$ is the voltage applied to the coil.

#### Magnetometer

Magnetometers are devices that measure the strength and direction of magnetic fields. They are used in geophysics, navigation, and scientific research. Magnetometers can detect changes in the Earth's magnetic field caused by geological features, solar activity, and human activities.

$$
T = 2\pi \sqrt{\dfrac{I}{M B_H}}
$$

where $T$ is the period of oscillation, $I$ is the moment of inertia, $M$ is the magnetic moment, and $B_H$ is the horizontal component of the Earth's magnetic field.

#### Magnetic Maps

Magnetic maps are maps that show the distribution of magnetic fields in a region. They are used in geology, archaeology, and mineral exploration. Magnetic maps can reveal hidden geological structures, mineral deposits, and archaeological sites.

Magnetic maps are created by measuring the magnetic field at various locations and plotting the data on a map. The magnetic field is measured using a magnetometer, which detects changes in the Earth's magnetic field caused by geological features, mineral deposits, and other sources.

$$
\Delta B = \dfrac{\mu_0}{4\pi} \dfrac{2M}{r^3}
$$

where $\Delta B$ is the change in magnetic field, $\mu_0$ is the permeability of free space, $M$ is the magnetic moment, and $r$ is the distance from the source.

#### Transformer

A transformer is a device that transfers electrical energy from one circuit to another through electromagnetic induction. It consists of two coils of wire, called the primary and secondary coils, that are wound around a common core. When an alternating current flows through the primary coil, it creates a changing magnetic field that induces a voltage in the secondary coil.

The voltage ratio of the transformer is given by:

$$
\dfrac{V_p}{V_s} = \dfrac{N_p}{N_s}
$$

where $V_p$ is the voltage in the primary coil, $V_s$ is the voltage in the secondary coil, $N_p$ is the number of turns in the primary coil, and $N_s$ is the number of turns in the secondary coil.

The current ratio of the transformer is given by:

$$
\dfrac{I_p}{I_s} = \dfrac{N_s}{N_p}
$$

where $I_p$ is the current in the primary coil, $I_s$ is the current in the secondary coil, $N_s$ is the number of turns in the secondary coil, and $N_p$ is the number of turns in the primary coil.

The power ratio of the transformer is given by:

$$
\dfrac{P_p}{P_s} = \dfrac{V_p I_p}{V_s I_s} = \dfrac{N_p}{N_s}
$$

where $P_p$ is the power in the primary coil, $P_s$ is the power in the secondary coil, $V_p$ is the voltage in the primary coil, $V_s$ is the voltage in the secondary coil, $I_p$ is the current in the primary coil, $I_s$ is the current in the secondary coil, $N_p$ is the number of turns in the primary coil, and $N_s$ is the number of turns in the secondary coil.

Step-up transformers increase the voltage from the primary to the secondary coil, while step-down transformers decrease the voltage from the primary to the secondary coil. Transformers are used in power distribution systems, voltage regulation, and electrical isolation.

### Applications of Magnetism

- **Electric Motors:** Electric motors use magnetic fields to convert electrical energy into mechanical energy. They are used in various applications, such as fans, pumps, and vehicles.
- **Generators:** Generators use magnetic fields to convert mechanical energy into electrical energy. They are used in power plants, wind turbines, and hydroelectric dams.
- **Transformers:** Transformers use magnetic fields to transfer electrical energy from one circuit to another. They are used in power distribution systems, voltage regulation, and electrical isolation.
- **Magnetic Resonance Imaging (MRI):** MRI machines use magnetic fields to create detailed images of the human body. They are used in medical diagnosis and research.
- **Magnetic Levitation (Maglev):** Maglev trains use magnetic fields to levitate and propel the train along a track. They are used in high-speed transportation systems.
- **Magnetic Storage:** Magnetic storage devices, such as hard drives and magnetic tapes, use magnetic fields to store and retrieve data. They are used in computers, servers, and data centers.

Magnetism is a fascinating and powerful force of nature that has a wide range of applications in science, technology, and everyday life. By understanding the principles of magnetism, we can unlock its potential and harness its power for the benefit of society.
