---
title: Kinematics - The Mathematics of Motion
description: Ever feel like motion is just math in disguise? This post unravels the mysteries of kinematics—why things move, how fast they go, and what happens when they crash. Whether it’s projectiles, rockets, or free-falling toast, we’ve got the equations to explain it all. Click in for a physics-powered ride!
date: 2023-01-19
draft: false
slug: /pensieve/physics/kinematics
tags:
  - Physics
  - Classical Mechanics
---

## Demystifying Motion, Forces, and Energy: A Journey Through Physics

Physics is the fundamental science that unveils the wonders of our universe, from the tiniest particles to the grandest galaxies. This blog post embarks on a journey through some of the most fascinating concepts in physics, exploring motion, forces, energy, and more!

### Setting the Stage: Reference Frames and Describing Motion

Imagine you're on a train traveling at a constant speed. To describe your motion, you need a reference frame – a point of reference relative to which you measure movement. The train itself can be a reference frame for objects within it, but for your motion relative to the ground, the stationary platform is a more suitable reference frame.

Motion in a straight line is often analyzed using concepts from calculus, particularly differentiation and integration.  These powerful tools allow us to describe how an object's position (x) changes with time (t) using velocity (v):

$$v(t) = \dfrac{dx}{dt}$$

Similarly, acceleration (a), the rate of change of velocity, can be found using integration:

$$a(t) = \dfrac{dv}{dt} = \dfrac{d^2x}{dt^2}$$

$$a = \dfrac{dx}{dt} \cdot \dfrac{dv}{dx} = v \, \dfrac{dv}{dx}$$

**Types of Motion:**

* **Uniform Motion:** When an object's velocity remains constant, it's undergoing uniform motion. The position-time graph for such motion is a straight line.
* **Non-uniform Motion:** If the object's velocity changes with time, it's experiencing non-uniform motion. Its position-time graph will be a curve.

**Instantaneous Velocity:** The velocity at a specific point in time is called the instantaneous velocity. It provides a snapshot of how fast the object is moving at that particular moment.

### Uniformly Accelerated Motion: A Special Case

A very common type of non-uniform motion is uniformly accelerated motion. In this case, the object's acceleration remains constant. A simple example is a freely falling object near the Earth's surface (ignoring air resistance). Here, the acceleration due to gravity (g) is constant, and we can derive relationships between position (x), velocity (v), time (t), and acceleration (a) using the following equations:

* **$v = u + at$**

$$a = \dfrac{dv}{dt} \implies \int_0^t a \, dt = \int_u^v dv \implies at = v - u \implies v = u + at$$

where $u$ is the initial velocity.

* **$x = ut + \dfrac{1}{2} a t^2$**

$$v = \dfrac{dx}{dt} = u + at \implies \int_0^x dx = \int_0^t (u + at) dt \implies x = ut + \dfrac{1}{2} a t^2$$

* **$v^2 = u^2 + 2ax$**

$$v = u + at \implies v^2 = (u + at)^2 = u^2 + 2uat + a^2t^2 = u^2 + 2a(ut + \dfrac{1}{2} a t^2) = u^2 + 2ax$$

These equations are essential tools for analyzing motion under constant acceleration, such as objects sliding down inclines or vehicles accelerating on roads.

**Distance travelled in nth second:** $s_n = u + a(2n - 1)/2$

$$x_n = S_n - S_{n-1}$$

$$x_n = (un + \frac{1}{2} an^2) - (u(n-1) + \frac{1}{2} a(n-1)^2)$$

$$x_n = un + \frac{1}{2} an^2 - un + u - \frac{1}{2} a(n^2 - 2n + 1)$$

$$x_n = u + a(n - \frac{1}{2})$$

### Special Case of Non-Uniform Motion

Consider a case of non-uniform motion where the acceleration of an object is not constant and is $a \propto t^n$. In this scenario, the velocity-time relationship can be derived by integrating the acceleration with respect to time:

$$a = \dfrac{dv}{dt} = kt^n \implies \int_u^v dv = \int_0^t kt^n dt \implies v = u + \frac{kt^{n+1}}{n+1}$$

where $k$ is a constant of proportionality.

Similarly, the position-time relationship can be found by integrating the velocity with respect to time:

$$v = \dfrac{dx}{dt} = u + \frac{kt^{n+1}}{n+1} \implies \int_0^x dx = \int_0^t (u + \frac{kt^{n+1}}{n+1}) dt \implies x = ut + \frac{kt^{n+2}}{(n+1)(n+2)}$$

These equations provide a general framework for analyzing non-uniform motion with varying acceleration.

### Moving in Two Dimensions: The Intricacies of Projectile Motion

As we move beyond straight lines, vectors become essential tools for describing motion in a plane. Vectors are quantities that have both magnitude (size) and direction. These are typically denoted with an arrow, and their magnitude is represented by the length of the arrow. We can add and subtract vectors using graphical methods like the head-to-tail method or parallelogram method.

Resolving a vector into rectangular components involves splitting it into horizontal and vertical components, each following its own set of equations. These components are often crucial for analyzing projectile motion, where an object is launched into the air and follows a curved path under the influence of gravity.

**Horizontal Motion:** In the horizontal direction, the object moves at a constant velocity (ignoring air resistance). The horizontal distance traveled ($x$) can be calculated using the equation:

$$x = u \, t \, \cos{\theta}$$

where $u$ is the initial velocity, $t$ is the time of flight, and $\theta$ is the launch angle. We consider the horizontal component of the velocity to be constant throughout the motion.

**Vertical Motion:** In the vertical direction, the object is subject to the acceleration due to gravity ($g$). The vertical distance traveled ($y$) can be calculated using the equation:

$$y = u \, t \, \sin{\theta} - \dfrac{1}{2} g t^2$$

The time of flight ($t$) can be found by setting $y = 0$ (when the object returns to the same height as the launch point) and solving for $t$:

$$t = \dfrac{2u \sin{\theta}}{g}$$

The maximum height ($h_{max}$) reached by the projectile can be found by setting the vertical velocity to zero:

$$v_y = u \sin{\theta} - gt = 0 \implies t = \dfrac{u \sin{\theta}}{g}$$

Substitute this time back into the vertical displacement equation to find the maximum height:

$$h_{max} = u \sin{\theta} \cdot \dfrac{u \sin{\theta}}{g} - \dfrac{1}{2} g \left(\dfrac{u \sin{\theta}}{g}\right)^2 = \dfrac{u^2 \sin^2{\theta}}{2g}$$

**Range of the Projectile:** The range of the projectile (the horizontal distance traveled) can be calculated by setting $y = 0$ and solving for $x$:

$$x = u \, t \, \cos{\theta} = u \cdot \dfrac{2u \sin{\theta}}{g} \cdot \cos{\theta} = \dfrac{u^2 \sin(2\theta)}{g}$$

The range is maximum when $\theta = 45^\circ$. This angle gives the maximum horizontal distance for a given initial velocity.

**Equation of Trajectory:** The trajectory of a projectile is the path it follows through space. The equation of the trajectory can be derived by eliminating time from the horizontal and vertical motion equations by substituting $t = \dfrac{x}{u \cos{\theta}}$ into the vertical equation:

$$y = u \sin{\theta} \cdot \dfrac{x}{u \cos{\theta}} - \dfrac{1}{2} g \left(\dfrac{x}{u \cos{\theta}}\right)^2 = x \tan{\theta} - \dfrac{g}{2u^2 \cos^2{\theta}} x^2$$

This equation describes the parabolic path ($y = ax + bx^2$) followed by a projectile launched at an angle $\theta$ with an initial velocity $u$.

**Special Cases of Projectile Motion: Free Fall**

Setting the launch angle to $90^\circ$ (straight up) results in a special case of projectile motion known as free fall. In this scenario, the object is launched vertically upwards with an initial velocity $u$ and returns to the same height.

- Time of flight: $t = \dfrac{2u}{g}$
- Maximum height: $h_{max} = \dfrac{u^2}{2g}$

When the object is dropped from a height, the initial velocity is zero ($u = 0$), and the time taken to reach the ground can be found using the equation $y = \dfrac{1}{2} g t^2$.

**Projectile on an Inclined Plane:** When a projectile is launched on an inclined plane, the motion can be analyzed by resolving the acceleration due to gravity into components parallel and perpendicular to the plane. The equations of motion are modified to account for the incline angle and the components of acceleration.

Time of flight: $t = \dfrac{2u \sin{\theta}}{g \cos{\alpha}}$

Maximum height wrt inclined plane: $h_{max} = \dfrac{u^2 \sin^2{\theta}}{2g \cos^2{\alpha}}$

Range wrt inclined plane: $x = ut \cos{\theta} - \dfrac{1}{2} g t^2 \sin{\alpha}$

$$x = u \cdot \dfrac{2u \sin{\theta}}{g \cos{\alpha}} \cdot \cos{\theta} - \dfrac{1}{2} g (\dfrac{2u \sin{\theta}}{g \cos{\alpha}})^2 \sin{\alpha}$$
$$x = \dfrac{u^2}{g \cos{\alpha}} (\sin{2\theta} - 2 \sin^2{\theta} \tan{\alpha})$$

For $r_{max}$, $\frac{dx}{d\theta} = 0$

$$\frac{d}{d\theta} (\sin{2\theta} - 2 \sin^2{\theta} \tan{\alpha}) = 0$$

$$2 \cos{2\theta} - 4 \sin{\theta} \cos{\theta} \tan{\alpha} = 0$$

$$\cos{2\theta} = \sin{2\theta} \tan{\alpha}$$

$$\frac{\cos{2\theta}}{\sin{2\theta}} = \cot{2\theta} = \tan{\alpha}$$

$$2\theta = \frac{\pi}{2} - \alpha$$

Range in terms of $\alpha$: 

$$x = \dfrac{u^2}{g \cos{\alpha}} (\sin{(\frac{\pi}{2} - \alpha)} - 2 \sin^2{(\frac{\frac{\pi}{2} - \alpha}{2})} \tan{\alpha})$$

$$x = \dfrac{u^2}{g \cos{\alpha}} (\cos{\alpha} - 2 (\frac{1 - \cos{(\frac{\pi}{2} - \alpha)}}{2}) \tan{\alpha})$$

$$x = \dfrac{u^2}{g \cos{\alpha}} (\cos{\alpha} - \tan{\alpha} + \sin{\alpha} \tan{\alpha})$$

$$x = \dfrac{u^2}{g} (\frac{1 - \sin{\alpha}}{\cos^2{\alpha}})$$

$$x = \dfrac{u^2}{g \, (1 + \sin{\alpha})}$$

### Relative Motion: The Dance of Frames of Reference

When analyzing the motion of objects from different frames of reference, we encounter the concept of relative motion. This involves considering how the motion of one object appears from the perspective of another object in a different frame of reference.

**Relative Velocity:** The velocity of an object as observed from another object in a different frame of reference is called the relative velocity. It is the vector difference between the velocities of the two objects:

$$v_{{rel}} = v_1 - v_2$$

**Relative Acceleration:** Similarly, the acceleration of an object as observed from another object is called the relative acceleration. It is the vector difference between the accelerations of the two objects:

$$a_{\text{rel}} = a_1 - a_2$$

Understanding relative motion is crucial in scenarios where multiple objects are moving with respect to each other, such as vehicles on a road or planets in space.

### The Laws of Motion: Understanding Forces and Interactions

Our understanding of motion is deeply intertwined with the concept of force. Force is any interaction that can change an object's state of rest or motion. It has both magnitude and direction.

**Newton's Laws of Motion:** These fundamental laws form the foundation of classical mechanics:

1. **First Law (Law of Inertia):** Every body perseveres in its state of rest, or of uniform motion in a right line, unless it is compelled to change that state by forces impressed thereon. This law defines the concept of inertia, the tendency of an object to maintain its state of motion.

$$\sum F = 0 \implies \text{object is at rest or moving with constant velocity}$$

2. **Second Law (Law of Acceleration):** The alteration of motion is ever proportional to the motive force impressed; and is made in the direction of the right line in which that force is impressed.

$$F = \frac{dp}{dt} = \frac{d(mv)}{dt} = m \frac{dv}{dt} = ma$$

**Impulse**: The change in momentum of an object is equal to the impulse applied to it. Impulse is the product of force and time:

$$J = F \Delta t = \Delta p$$

3. **Third Law (Law of Interactions):** To every action there is always opposed an equal reaction: or the mutual actions of two bodies upon each other are always equal, and directed to contrary parts.

$$F_{12} = -F_{21}$$

**Conservation of Linear Momentum:** This law is a direct consequence of Newton's third law. The total linear momentum ($p$) of a closed system (a system with no external forces acting on it) remains constant. This means that in a collision or interaction between objects within the closed system, the total momentum before the event is equal to the total momentum after the event.

$$\sum p_{\text{initial}} = \sum p_{\text{final}}$$

**Equilibrium**

When the net force acting on an object is zero, the object is in a state of equilibrium. This doesn't necessarily mean the object isn't moving; it simply means its velocity is constant.

$$\sum F = 0 \implies \text{object is in equilibrium}$$

**Types of Equilibrium:**

* **Static Equilibrium:** When an object is at rest and remains at rest, it is in static equilibrium.

* **Dynamic Equilibrium:** When an object is moving at a constant velocity, it is in dynamic equilibrium.

**Friction:**

Friction is a force that opposes the relative motion between two surfaces in contact.

Law of Friction: The force of friction is proportional to the normal force (the force pressing the surfaces together) and is independent of the contact area.

$$f_{\text{max}} = \mu_s N$$

where $f_{\text{max}}$ is the maximum static friction, $\mu_s$ is the coefficient of static friction, and $N$ is the normal force.

There are two main types of friction:

* **Static Friction:** This force acts between objects at rest, preventing them from slipping. The maximum value of static friction depends on the normal force (the force pressing the surfaces together).

* **Kinetic Friction:** This force comes into play when objects are already in relative motion. Kinetic friction is usually slightly less than the maximum static friction.

Friction can be a desirable or undesirable force depending on the situation. Lubrication can be used to reduce friction between surfaces.

**Push vs. Pull:**

When we push or pull an object, we exert a force on it. The direction of the force depends on whether we are pushing or pulling the object. The object exerts an equal and opposite force back on us, as per Newton's third law.

Let's push an object of mass $m$ with a force $F$ with an angle $\theta$ with the horizontal. The object moves with an acceleration $a$.

Breaking the force into components:

$$F_x = F \cos{\theta} \quad F_y = F \sin{\theta}$$

Normal reaction acting on the object is sum of the vertical components of the forces acting on the object:

$$N = mg + F \sin{\theta}$$

The force required to move the object is the horizontal component of the force:

$$f = F \cos{\theta} = \mu_s N$$

where $\mu_s$ is the coefficient of static friction.

$$ F \cos{\theta} = \mu_s (mg + F \sin{\theta})$$

$$ F = \dfrac{\mu_s mg}{\cos{\theta} - \mu_s \sin{\theta}}$$

When we pull the object, the normal reaction acting on the object is the difference of the vertical components of the forces acting on the object:

$$N = mg - F \sin{\theta}$$

Therefore, the force required to move the object when we pull it is:

$$ F = \dfrac{\mu_s mg}{\cos{\theta} + \mu_s \sin{\theta}}$$

So, the force required to move the object when we pull it is less than the force required to move the object when we push it.

The best angle to pull the object is when $\cos{\theta} + \mu_s \sin{\theta}$ is maximum. Differentiating the expression with respect to $\theta$ and equating it to zero gives the best angle.

$$\dfrac{d}{d\theta} (\cos{\theta} + \mu_s \sin{\theta}) = 0$$

$$-\sin{\theta} + \mu_s \cos{\theta} = 0$$

$$\theta = \tan^{-1}{\mu_s}$$

### Circular Motion: The Play of Centripetal Forces

Circular motion is a common phenomenon in nature, from planets orbiting the sun to cars navigating curves. In circular motion, an object moves along a circular path with a constant speed. This motion requires a centripetal force to keep the object moving in a circular path.

**Centripetal Force:** The centripetal force is the force that acts towards the center of the circle, keeping an object moving in a circular path. It is not a new type of force but rather the net force required to maintain circular motion.

$$F_c = \dfrac{mv^2}{r}$$

where $F_c$ is the centripetal force, $m$ is the mass of the object, $v$ is the velocity, and $r$ is the radius of the circular path.

**Centripetal Acceleration:** The centripetal acceleration is the acceleration of an object moving in a circular path. It is directed towards the center of the circle and is given by:

$$a_c = \dfrac{v^2}{r}$$

where $a_c$ is the centripetal acceleration, $v$ is the velocity, and $r$ is the radius of the circular path.

**Banked Curves:**

When a vehicle moves along a banked curve, the normal force acting on the vehicle is resolved into two components: the vertical component and the horizontal component. The horizontal component provides the centripetal force required for circular motion.

$$N \cos{\theta} = mg \quad N \sin{\theta} = \dfrac{mv^2}{r}$$

**Conical Pendulum:**

A conical pendulum is a mass attached to a string moving in a horizontal circle. The tension in the string can be resolved into two components: the vertical component and the horizontal component. The horizontal component provides the centripetal force required for circular motion.

$$T \cos{\theta} = mg \quad T \sin{\theta} = \dfrac{mv^2}{r}$$

### Gravitation: The Force That Binds the Universe

Gravitation is the force of attraction between two masses. It is one of the four fundamental forces of nature and plays a crucial role in shaping the universe.

**Newton's Law of Universal Gravitation:** The force of attraction between two point masses is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.

$$F = \dfrac{G m_1 m_2}{r^2}$$

where $F$ is the gravitational force, $G$ is the universal gravitational constant ($6.674 \times 10^{-11} \, \text{Nm}^2/\text{kg}^2$), $m_1$ and $m_2$ are the masses of the objects, and $r$ is the distance between their centers.

**Gravitational Field:** The gravitational field is a vector field that describes the force experienced by a test mass placed at a point in space. It points towards the center of mass and is given by:

$$\vec{g} = -\dfrac{GM}{r^2} \hat{r}$$

where $\vec{g}$ is the gravitational field, $M$ is the mass of the object creating the field, $r$ is the distance from the center of mass, and $\hat{r}$ is the unit vector pointing towards the center of mass.

Flux of gravitational field through a surface is given by:

$$\Phi = \oint \vec{g} \cdot d\vec{A} = -4\pi GM$$

where $\Phi$ is the flux of the gravitational field, $\vec{g}$ is the gravitational field, $d\vec{A}$ is the area vector, and $M$ is the mass of the object creating the field.

**Gravitational Potential:** The gravitational potential is the work done in bringing a unit mass from infinity to a point in space. It is given by:

$$V = \int \vec{g} \cdot d\vec{r} = -\dfrac{GM}{r}$$

where $V$ is the gravitational potential, $\vec{g}$ is the gravitational field, $d\vec{r}$ is the displacement vector, and $r$ is the distance from the center of mass.

**Gravitational Potential Energy:** The gravitational potential energy is the energy stored in an object due to its position in a gravitational field. It is given by:

$$U = \int F \cdot dr = -\dfrac{GMm}{r}$$

where $U$ is the gravitational potential energy, $F$ is the force, $dr$ is the displacement, $M$ is the mass of the object creating the field, $m$ is the mass of the object, and $r$ is the distance from the center of mass.

**Escape Velocity:** The escape velocity is the minimum velocity required for an object to escape the gravitational pull of a massive body. i.e., when the object reaches infinity, its kinetic energy is equal to the gravitational potential energy.

$$\dfrac{1}{2} m v_{\text{escape}}^2 = \dfrac{GMm}{r}$$

$$v_{\text{escape}} = \sqrt{\dfrac{2GM}{r}}$$

**Orbital Velocity:** The orbital velocity is the velocity required for an object to stay in a stable orbit around a massive body. It is the velocity at which the centripetal force due to gravity is balanced by the centrifugal force.

$$\dfrac{mv^2}{r} = \dfrac{GMm}{r^2}$$

$$v_{\text{orbital}} = \sqrt{\dfrac{GM}{r}}$$

**Energy of a body in Orbit:** The total energy of a body in orbit is the sum of its kinetic and potential energy. For a circular orbit, the total energy is negative, indicating a bound orbit.

$$E = \dfrac{1}{2} m v^2 - \dfrac{GMm}{r} = -\dfrac{GMm}{2r}$$

**Relation between $G$ and $g$:** The acceleration due to gravity at the surface of the Earth is given by:

$$g = \dfrac{GM}{R^2}$$

At height $h$ above the surface of the Earth, the acceleration due to gravity is:

$$g_h = \dfrac{GM}{(R + h)^2} = \dfrac{gR^2}{(R + h)^2} = g (\dfrac{R}{R + h})^2 = g (1 + \dfrac{h}{R})^{-2}$$

By Taylor series expansion, $(1 + x)^n \approx 1 + nx$ for $x << 1$:

$$g_h = g (1 - \dfrac{2h}{R})$$

We can write $g$  in terms of mass density $\rho$ as:

$$g = \frac{G}{R^2} \frac{4}{3} \pi R^3 \rho = \frac{4}{3} \pi G R \rho$$

At depth $d$ below the surface of the Earth, the acceleration due to gravity is:

$$g_d = \frac{4}{3} \pi G (R-d) \rho = g (1 - \frac{d}{R})$$

### Work, Energy, and Power: The Currency of Motion

The concepts of work, energy, and power provide a framework for understanding how forces affect the motion of objects.

**Work:** Work is done when a force acts on an object and causes it to move in the direction of the force. Mathematically, work is defined as the product of the force applied and the displacement of the object in the direction of the force:

$$W = F \cdot d = Fd \cos{\theta}$$

where $W$ is work done, $F$ is the force applied, $d$ is the displacement, and $\theta$ is the angle between the force and displacement vectors.

**Work-Energy Theorem:** The work done on an object is equal to the change in its kinetic energy. This principle is known as the work-energy theorem:

$$W = \int F dx = \int m (v \dfrac{dv}{dx}) dx = \int_u^v m \, v \ dv = \dfrac{1}{2} m v^2 - \dfrac{1}{2} m u^2 = \Delta \text{KE}$$

$$W = \Delta \text{KE}$$

where $W$ is the work done, $F$ is the force, $dx$ is the displacement, and $\Delta KE$ is the change in kinetic energy.

**Kinetic Energy:** Kinetic energy is the energy an object possesses due to its motion. It is defined as the work required to accelerate an object from rest to its current velocity:

$$\text{KE} = \dfrac{1}{2} m v^2$$

where $\text{KE}$ is the kinetic energy, $m$ is the mass of the object, and $v$ is its velocity.

**Potential Energy:** Potential energy is the energy an object possesses due to its position or configuration. It can be stored in various forms, such as gravitational potential energy, elastic potential energy, or chemical potential energy.

* **Gravitational Potential Energy:** The potential energy stored in an object due to its position relative to a reference point (usually the ground) is called gravitational potential energy. It is given by:

$$\text{PE} = mgh$$

where $\text{PE}$ is the potential energy, $m$ is the mass of the object, $g$ is the acceleration due to gravity, and $h$ is the height of the object above the reference point.

**Conservation of Mechanical Energy:** In the absence of non-conservative forces (like friction), the total mechanical energy of a system remains constant. This principle is known as the conservation of mechanical energy.

$$E_{\text{initial}} = E_{\text{final}}$$

where $E$ is the total mechanical energy, consisting of kinetic and potential energy.

$$E = \text{KE} + \text{PE}$$

**Power:** Power is the rate at which work is done or energy is transferred. It is defined as the work done per unit time:

$$P = \dfrac{dW}{dt} = F \cdot v$$

where $P$ is power, $W$ is work done, $t$ is time, $F$ is force, and $v$ is velocity.

**Types of Energy Transformations:**

* **Mechanical Energy:** The sum of kinetic and potential energy in a system.

* **Thermal Energy:** The energy associated with the random motion of particles in a substance.

* **Chemical Energy:** The energy stored in the bonds of chemical compounds.

* **Electrical Energy:** The energy associated with the flow of electric charge.

* **Nuclear Energy:** The energy stored in the nucleus of an atom.

**Efficiency:** Efficiency is a measure of how well energy is converted from one form to another. It is the ratio of useful energy output to total energy input:

$$\text{Efficiency} = \dfrac{\text{Useful Energy Output}}{\text{Total Energy Input}} \times 100\%$$

Efficiency is often less than 100% due to energy losses in the form of heat, sound, or other non-useful forms.

### Collisions: The Dance of Momentum and Energy

Collisions are interactions between objects that result in a change in their velocities. They can be classified into two main types:

* **Elastic Collisions:** In elastic collisions, both momentum and kinetic energy are conserved. The objects bounce off each other without any loss of kinetic energy.

* **Inelastic Collisions:** In inelastic collisions, momentum is conserved, but kinetic energy is not. Some kinetic energy is lost to other forms, such as heat or sound.

**Types of Collisions:**

* **Perfectly Elastic Collision:** In a perfectly elastic collision, both momentum and kinetic energy are conserved. The objects bounce off each other without any loss of kinetic energy.

    - momentum conservation: $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \Rightarrow m_1 (u_1 - v_1) = m_2 (v_2 - u_2)$
    - kinetic energy conservation: $\dfrac{1}{2} m_1 u_1^2 + \dfrac{1}{2} m_2 u_2^2 = \dfrac{1}{2} m_1 v_1^2 + \dfrac{1}{2} m_2 v_2^2 \Rightarrow m_1 (u_1^2 - v_1^2) = m_2 (v_2^2 - u_2^2)$

    - Dividing the two equations: $u_1 + v_1 = v_2 + u_2 \Rightarrow u_1 - u_2 = v_2 - v_1 \Rightarrow v_{\text{approach}} = v_{\text{separation}}$

* **Perfectly Inelastic Collision:** In a perfectly inelastic collision, the objects stick together after the collision. Momentum is conserved, but kinetic energy is not.

    - momentum conservation: $m_1 u_1 + m_2 u_2 = (m_1 + m_2) v \Rightarrow v = \dfrac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$
    - kinetic energy conservation: $\dfrac{1}{2} m_1 u_1^2 + \dfrac{1}{2} m_2 u_2^2 = \dfrac{1}{2} (m_1 + m_2) v^2 + \text{KE}_{\text{lost}}$

    - $\text{KE}_{\text{lost}} = \dfrac{1}{2} \dfrac{m_1 m_2}{m_1 + m_2} (u_1 - u_2)^2$

**Coefficient of Restitution:** The coefficient of restitution ($e$) is a measure of how "bouncy" a collision is. It is defined as the ratio of the relative velocity of separation to the relative velocity of approach:

$$e = \dfrac{v_{\text{separation}}}{v_{\text{approach}}} = \dfrac{v_2 - v_1}{u_1 - u_2}$$

For perfectly elastic collisions, $e = 1$, while for perfectly inelastic collisions, $e = 0$.

**Obligue Collisions:**

In oblique collisions, the velocities of the objects are not along the line of impact. The velocities can be resolved into components along the line of impact and perpendicular to it. The components along the line of impact are used to analyze the collision.

$$m_1 v_{1n} + m_2 v_{2n} = m_1 u_{1n} + m_2 u_{2n}$$

where $v_{1n}$ is the final velocity of object 1 along the line of impact, $u_{1n}$ is the initial velocity of object 1 along the line of impact, and $u_{2n}$ is the initial velocity of object 2 along the line of impact. Rearranging the equation:

$$(m_1 + m_2) v_{1n} = m_1 u_{1n} + m_2 u_{2n} +m_2 (v_{1n} - v_{2n})$$

$$(m_1 + m_2) v_{1n} = m_1 u_{1n} + m_2 u_{2n} + e m_2 (u_{2n} - u_{1n})$$

where $e$ is the coefficient of restitution.

$$v_{1n} = \dfrac{m_1 - e m_2}{m_1 + m_2} u_{1n} + \dfrac{(1 + e) m_2}{m_1 + m_2} u_{2n}$$

**Bouncing Ball Problem:**

A ball is dropped from a height $h$ with velocity $v$ and bounces off the ground. The coefficient of restitution between the ball and the ground is $e$. The ball bounces to a height $h'$ with velocity $v'$ after the first bounce. We can find the height $h'$ using the formula:

$$e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{v'}{v} = \frac{\sqrt{2gh'}}{\sqrt{2gh}}$$

$$v' = e v \quad \text{and} \quad h' = e^2 h$$

Generalizing the formula for $n$ bounces:

$$v' = e^n v \quad \text{and} \quad h' = e^{2n} h$$

Distance traveled by the ball after $n$ bounces:

$$d = h_0 + 2h_1 + 2h_2 + \ldots + 2h_n = h_0 + 2h_0 e^2 + 2h_0 e^4 + \ldots + 2h_0 e^{2n}$$

$$d = h_0 (1 + 2e^2(1 + e^2 + \ldots + e^{2n})) = h_0 \left(1 + 2e^2 \left(\dfrac{1 - e^{2n}}{1 - e^2}\right)\right)$$

when $n \to \infty$, $d = h_0 \left(\dfrac{1 + e^2}{1 - e^2}\right)$

Time taken to travel the distance $d$:

$$t = \sqrt{\dfrac{2h_0}{g}} + 2 \sqrt{\dfrac{2h_0 e^2}{g}} + 2 \sqrt{\dfrac{2h_0 e^4}{g}} + \ldots + 2 \sqrt{\dfrac{2h_0 e^{2n}}{g}}$$

$$t = \sqrt{\dfrac{2h_0}{g}} (1 + 2e(1 + e + e^2 + \ldots + e^n)) = \sqrt{\dfrac{2h_0}{g}} \left(1 + 2e \left(\dfrac{1 - e^n}{1 - e}\right)\right)$$

when $n \to \infty$, $t = \sqrt{\dfrac{2h_0}{g}} \left(\dfrac{1 + e}{1 - e}\right)$

**Rocket Propulsion**

Rocket propulsion is a classic example of the application of Newton's third law. A rocket works by expelling mass at high velocity in one direction, causing the rocket to move in the opposite direction.

The thrust produced by a rocket is given by:

$$T = \dot{m} v_e$$

where $T$ is the thrust, $\dot{m}$ is the rate of mass flow, and $v_e$ is the exhaust velocity.

The rocket equation relates the change in velocity of a rocket to its initial and final masses:

$$\Delta v = v_e \ln{\dfrac{m_0}{m_f}}$$

where $\Delta v$ is the change in velocity, $m_0$ is the initial mass of the rocket, and $m_f$ is the final mass of the rocket.

Derivation of the rocket equation:

let $m$ be the mass of the rocket at time $t$, then, $m = m_0 - \dot{m} t$

$$F = \dot{m} v_e = m \dfrac{dv}{dt}$$

$$\int_{v_0}^{v} dv = \int_0^t \dfrac{\dot{m} v_e}{m} dt$$

$$\Delta v = -v_e \int_{m_0}^{m} \dfrac{dm}{m} \quad (\text{as} \quad \dot{m} = -\dfrac{dm}{dt})$$

$$\Delta v = v_e \ln{\dfrac{m_0}{m}}$$

### Conclusion

Physics provides a rich tapestry of concepts that help us understand the fundamental principles governing motion, forces, and energy in our universe. By exploring kinematics, forces, energy, and more, we gain insights into the workings of the natural world and the laws that govern it. Whether we're analyzing the motion of objects in two dimensions, understanding the intricacies of friction, or delving into the conservation of energy, physics offers a fascinating journey through the mysteries of our universe.