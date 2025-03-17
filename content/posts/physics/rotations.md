---
title: Rotational Dynamics - Spin it to win it!
description: From pirouetting ballerinas to the physics of fidget spinners, rotational dynamics explains it all. Learn how torque, angular momentum, and gyroscopic effects rule our spinning world. Ever wondered why cats always land on their feet? Click in—this post will turn your perspective around!
date: 2023-01-22
draft: false
slug: /pensieve/physics/rotations
tags:
  - Physics
  - Classical Mechanics
---
Whether it's the graceful twirl of a dancer or the precise movement of a spinning top, rotational dynamics offers a rich tapestry of phenomena to study and appreciate. By unraveling the intricacies of rotational motion, we gain a deeper understanding of the physical world and the beauty of rotational dynamics.

### Linear vs. Rotational Motion: A Comparison

Linear and rotational motion share some similarities but also have distinct characteristics:

| Feature    | Linear Motion                                                                 | Rotational Motion                                                                                                       |
| ---------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Kinematics | Described by displacement ($x$), velocity ($v$), and acceleration ($a$) | Described by angular displacement ($\theta$), angular velocity ($\omega$), and angular acceleration ($\alpha$)    |
| Inertia    | Inertia (resistance to change in motion) is simply mass ($m$)               | Inertia is represented by the moment of inertia, which depends on mass distribution and axis of rotation ($I = mr^2$) |
| Momentum   | Defined as$\quad p = mv$                                                    | Defined as$\quad L = I\omega = mvr$                                                                                   |
| Dynamics   | Governed by Newton's laws of motion ($F = dp/dt = ma$)                      | Governed by Newton's second law for rotation ($\tau = dL/dt = I \alpha$)                                              |
| Work       | Work done by a force is$W = Fd$                                             | Work done by a torque is$W = \tau \theta$                                                                             |
| Energy     | Kinetic energy ($\text{KE}$) $= 1/2 mv^2$                                 | Rotational kinetic energy ($\text{KE}_{rot}$) $= 1/2 I\omega^2$                                                     |

### Circular Motion

When an object moves in a circle, the motion can be broken down into two components:

- tangential motion (along the circle): $e_t = -\hat{i} \sin \theta + \hat{j} \cos \theta$.
- radial motion (perpendicular to the circle): $e_r = \hat{i} \cos \theta + \hat{j} \sin \theta$.

$\vec{r} = r \vec{e_r}$ is the position vector.
$\vec{v} = r \omega \vec{e_t}$ is the velocity vector.
$\vec{a} = r (\alpha \vec{e_t} - \omega^2 \vec{e_r})$ is the acceleration vector.

We can observe that the acceleration has two components:

- tangential acceleration: $a_t = r \alpha$; it changes the magnitude of the velocity.
- radial acceleration: $a_r = r \omega^2$; it changes the direction of the velocity.

The net acceleration is the vector sum of the tangential and radial accelerations: $\vec{a} = \vec{a_t} + \vec{a_r} \implies a = \sqrt{a_t^2 + a_r^2} = r\sqrt{\alpha^2 + \omega^4}$.

**Centripetal Force**: The force required to keep an object moving in a circle is called the centripetal force. It is given by $F_c = m a_r = m r \omega^2 = m v^2/r$.

**Vertical Circular Motion**: In vertical circular motion, the tension in the string is given by:

$$
T = m(\frac{v^2}{r} + g \cos \theta)
$$

For a complete revolution, the minimum velocity at the top of the circle is given by:

$$
mg = \frac{mv^2}{r} \implies v = \sqrt{rg} \quad \text{(T = 0 and $\theta = \pi$ at the top)}
$$

Conserving energy, we have:

$$
\frac{1}{2} m v_{top}^2 + 2mgr = \frac{1}{2} m v^2 \implies v = \sqrt{5rg}
$$

### Moment of Inertia and Radius of Gyration

The moment of inertia ($I$) is a measure of an object's resistance to changes in its rotational motion. It depends on the mass distribution and the axis of rotation. The moment of inertia can be calculated using the formula:

$$
I = \int r^2 dm
$$

For example,

- For a point mass $m$ at a distance $r$ from the axis of rotation, $I = mr^2$.
- For a thin hoop of radius $R$ and mass $m$ rotating about an axis perpendicular to the hoop, $I = m R^2$. ($dm = \frac{m}{2\pi} d\theta$)
- For a thin disk of radius $R$ and mass $m$ rotating about an axis perpendicular to the disk and passing through its center, $I = \frac{1}{2} m R^2$. ($dm = \frac{m}{\pi R^2} r dr$)
- For a thin spherical shell of radius $R$ and mass $m$ rotating about an axis through its center, $I = \frac{2}{3} m R^2$. ($dm = \frac{m}{4\pi R^2} r^2 dr$)
- For a solid sphere of radius $R$ and mass $m$ rotating about an axis through its center, $I = \frac{2}{5} m R^2$. ($dm = \frac{3m}{R^3} r^2 dr$)
- For a solid cone of radius $R$, height $h$, and mass $m$ rotating about an axis through its center and perpendicular to the base, $I = \frac{3}{10} m R^2$. ($dm = \frac{3m}{\pi R^2 h} r dr$)
- For a thin rod of length $L$ and mass $m$ rotating about an axis perpendicular to the rod and passing through its center, $I = \frac{1}{12} m L^2$. ($dm = \frac{m}{L} dx$)

The radius of gyration ($k$) is a measure of how the mass of an object is distributed around an axis of rotation. It is defined as:

$$
k = \sqrt{\frac{I}{m}}
$$

**Parallel Axis Theorem**: The moment of inertia of an object about an axis parallel to and a distance $d$ away from the object's center of mass is given by:

$$
I = I_{cm} + md^2
$$

**Perpendicular Axis Theorem**: The moment of inertia of a planar object about an axis perpendicular to its plane and passing through a point on the object is the sum of the moments of inertia of the object about two perpendicular axes in its plane passing through the point.

$$
I_z = I_x + I_y
$$

### Center of Mass and Center of Gravity

Center of Mass ($\vec{R}$): The point at which the entire mass of an object can be considered to be concentrated. It is given by:

$$
\vec{R} = \frac{\sum m_i \vec{r_i}}{\sum m_i}
$$

Center of Gravity ($\vec{G}$): The point at which the entire weight of an object can be considered to act. For a uniform gravitational field, the center of gravity coincides with the center of mass.

$$
\vec{G} = \frac{\sum m_i \vec{g_i}}{\sum m_i}
$$

### Rotational Kinematics

**Angular Displacement**: The angle through which an object rotates is given by $\theta = \omega_i t + \frac{1}{2} \alpha t^2$.

**Angular Velocity**: The rate of change of angular displacement is given by $\omega = \omega_i + \alpha t$.

**Angular Acceleration**: The rate of change of angular velocity is given by $\alpha = \frac{\omega_f - \omega_i}{t}$.

### Rolling Motion

When an object rolls without slipping, the point of contact between the object and the surface is instantaneously at rest. The velocity of the center of mass is given by $v = R \omega$, where $R$ is the radius of the object.

The motion of a point on the rim of a rolling object can be described by the following equations:

$$
x = R (\omega t - \sin{\omega t}) \quad \text{(horizontal position)}
$$

$$
y = R (1 - \cos{\omega t}) \quad \text{(vertical position)}
$$

$$
\vec{r} = x \hat{i} + y \hat{j}
$$

So, the velocity of a point on the rim of a rolling object is given by:

$$
\vec{v} = \frac{dx}{dt} \hat{i} + \frac{dy}{dt} \hat{j} = R (\omega - \omega \cos{\omega t}) \hat{i} + R \omega \sin{\omega t} \hat{j}
$$

$$
v = \sqrt{v_x^2 + v_y^2} = R \omega \sqrt{2(1 - \cos{\omega t})} = R \omega \sqrt{4 \sin^2 \frac{\omega t}{2}} = 2 R \omega \sin \frac{\omega t}{2}
$$

$$
dS = v dt = 2 R \omega \sin \frac{\omega t}{2} dt \implies \int_{0}^{x} dx = \int_{0}^{t} 2 R \omega \sin \frac{\omega t}{2}
$$

$$
S = 2 R \omega \int_{0}^{t} \sin \frac{\omega t}{2} dt = -4 R \omega \cos \frac{\omega t}{2} \Big|_{0}^{t} = 4 R \omega (1 - \cos \frac{\omega t}{2})
$$

Each complete revolution corresponds to $t = 2\pi / \omega$, so the distance traveled in one revolution is $S = 4 R \omega (1 - \cos \pi) = 8 R \omega$.

The total kinetic energy of a rolling object is the sum of its translational kinetic energy and rotational kinetic energy:

$$
KE_{\text{total}} = KE_{\text{rot}} + KE_{\text{lcm}} = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2 = \frac{1}{2} (I_{\text{cm}} + m R^2) \omega^2
$$

Angular momentum of a rolling object is given by:

$$
L = I \omega = (I_{\text{cm}} + m R^2) \omega
$$

### Sliding and Rolling Friction

**Sliding Friction**: The frictional force acting on an object that is sliding along a surface is given by $f_s = \mu_s N$, where $\mu_s$ is the coefficient of static friction and $N$ is the normal force.

**Rolling Friction**: The frictional force acting on an object that is rolling without slipping is given by $f_r = \mu_r N$, where $\mu_r$ is the coefficient of rolling friction and $N$ is the normal force.

For a rolling object, the maximum acceleration without slipping is given by:

$$
a = \frac{f_s}{m} = \frac{\mu_s N}{m} = \frac{\mu_s m g}{m} = \mu_s g
$$

The maximum acceleration of a rolling object is $\mu_s g$. If the acceleration is less than this value, the object will roll without slipping.

### Torque: The Rotational Force

Torque is the rotational equivalent of force and is defined as the product of the force applied to an object and the lever arm (perpendicular distance) from the point of rotation. Mathematically, torque is given by:

$$
\tau = r \times F = r F \sin \theta
$$

where $r$ is the lever arm, $F$ is the force applied, and $\theta$ is the angle between the force and the lever arm.

Torque plays a crucial role in rotational dynamics, as it causes objects to rotate around an axis. By applying torque to an object, we can change its angular momentum and induce rotational motion.

### Equilibrium of Rigid Bodies: Finding the Balance Point

A rigid body is in equilibrium if the sum of all the forces and torques acting on it is zero. This means for a rigid body to be at rest or in uniform motion without wobbling, the net force and net torque acting on it must be zero.

$$
\sum F = 0 \quad \text{(translational equilibrium)}
$$

$$
\sum \tau = 0 \quad \text{(rotational equilibrium)}
$$

The equilibrium of a rigid body can be analyzed by considering the forces and torques acting on it. By balancing these forces and torques, we can determine the conditions for the body to be in equilibrium.

### Angular Momentum: The Rotational Analog of Linear Momentum

Angular momentum is a vector quantity that describes the rotational motion of an object. It is defined as the product of the moment of inertia and the angular velocity of the object. Mathematically, angular momentum is given by:

$$
L = I \omega
$$

where $I$ is the moment of inertia and $\omega$ is the angular velocity. Angular momentum is conserved in the absence of external torques, similar to linear momentum.

Angular momentum is a fundamental concept in rotational dynamics, providing insights into the behavior of rotating objects and the conservation of rotational motion.

### The Ever-Conserved: The Law of Conservation of Angular Momentum

Similar to linear momentum, angular momentum is conserved in a closed system (no external torques acting on the system). This means the total angular momentum before a rotational event is equal to the total angular momentum after the event.

$$
L_{\text{initial}} = L_{\text{final}}
$$

This law finds applications in various scenarios, such as a figure skater spinning faster by pulling in their arms.

### Rotational Kinetic Energy: The Energy of Rotating Objects

Rotational kinetic energy is the energy associated with the rotational motion of an object. It depends on the moment of inertia and the angular velocity of the object. Mathematically, rotational kinetic energy is given by:

$$
KE_{\text{rot}} = \frac{1}{2} I \omega^2
$$

where $I$ is the moment of inertia and $\omega$ is the angular velocity. Rotational kinetic energy is an essential component of the total energy of a rotating object and contributes to its overall motion.

### Work and Power in Rotational Motion

Work and power in rotational motion are analogous to their linear counterparts but involve torque and angular displacement. The work done by a torque on a rotating object is given by:

$$
W = \tau \theta
$$

where $\tau$ is the torque applied and $\theta$ is the angular displacement. Power in rotational motion is the rate at which work is done and is given by:

$$
P = \frac{dW}{dt} = \tau \omega
$$

where $\omega$ is the angular velocity. Understanding work and power in rotational motion helps us analyze the energy transfer and efficiency of rotating systems.

### Applications of Rotational Dynamics

Rotational dynamics finds applications in various fields, including:

- **Engineering**: Understanding the behavior of rotating machinery, such as engines, turbines, and gears.
- **Astronomy**: Analyzing the rotational motion of celestial bodies, such as planets, stars, and galaxies.
- **Sports**: Explaining the dynamics of spinning objects, such as balls, frisbees, and gymnastic equipment.
- **Biomechanics**: Studying the rotational motion of human joints and limbs during activities like running, jumping, and throwing.

By unraveling the intricacies of rotational motion, we gain a deeper appreciation for the beauty and complexity of the physical world around us. Whether it's the graceful spin of a figure skater or the powerful rotation of a wind turbine, the principles of rotational dynamics shape our understanding of the universe and its many wonders.

### Conclusion

Rotational dynamics is a fascinating branch of physics that delves into the complexities of rotational motion. By exploring concepts like center of mass, torque, angular momentum, and their applications, we gain valuable insights into the behavior of rotating objects in the world around us. Whether it's the graceful twirl of a dancer or the precise movement of a spinning top, rotational dynamics offers a rich tapestry of phenomena to study and appreciate.
