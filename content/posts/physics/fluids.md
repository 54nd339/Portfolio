---
title: Fluids
description: Unveiling the mechanical properties of fluids, from pressure and viscosity to surface tension and flow regimes.
date: 2023-02-01
draft: false
slug: /pensieve/physics/fluids
tags:
 - Physics
 - Classical Mechanics
---
Fluids, encompassing both liquids and gases, are ubiquitous in our world. From the crashing waves to the smooth flow of blood in our veins, understanding their mechanical properties is crucial in various scientific and engineering fields. This blog delves into the fascinating realm of fluids, exploring pressure, viscosity, surface tension, and the principles that govern their behavior.

### The Weight of a Liquid Column: Pressure due to Gravity

Fluids exert pressure in all directions due to the weight of the fluid particles themselves. The pressure (p) at a point within a fluid at rest is directly proportional to the depth (h) and the density ($\rho$) of the fluid:

$$
p = \rho \, g \, h
$$

where, g is the acceleration due to gravity (approximately 9.81 m/s²)

This equation tells us that pressure increases with depth in a static fluid column.

Deriving the above equation:

Consider a small column of fluid of height dh at depth h in a fluid column. The weight of this column is given by:

$$
dW = \rho \, A \, dh \, g
$$

where, A is the cross-sectional area of the column. The pressure at the base of this column is:

$$
dP = \dfrac{dW}{A} = \rho \, g \, dh
$$

Integrating this equation from the surface (P = 0) to a depth h gives:

$$
P = \int_0^h \rho \, g \, dh = \rho \, g \, h
$$

This derivation illustrates how the pressure at a point within a fluid depends on the weight of the fluid column above that point.

### The Buoyant Force: Archimedes' Principle

Archimedes' principle states that an object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object. This principle helps explain why objects float or sink in fluids. The buoyant force (Fb) acting on an object is given by:

$$
F_b = \rho_{\text{fluid}} \, V_{\text{displaced}} \, g
$$

where:

- $\rho_{\text{fluid}}$ is the density of the fluid
- $V_{\text{displaced}}$ is the volume of fluid displaced by the object

### Pascal's Law: The Force Multiplier

* **Principle:** Pascal's law states that pressure applied to a confined incompressible fluid is transmitted undiminished throughout the fluid in all directions and acts on the walls of the container.

**Applications:**

* **Hydraulic Lift:** This device utilizes Pascal's law to amplify force. A small force applied to a piston with a small area creates a much larger force on a larger piston in the same hydraulic system, allowing for lifting heavy objects. The pressure remains constant throughout the system:

$$
p_1 A_1 = p_2 A_2
$$

where:

- $p_1$ and $p_2$ are the pressures in the small and large pistons, respectively
- $A_1$ and $A_1$ are the areas of the small and large pistons, respectively

* **Hydraulic Brakes:**  These brakes use a similar principle. Applying a force to a small pedal creates a large pressure in the brake fluid, which is transmitted to the pistons in the brake calipers, ultimately generating the necessary force to stop the vehicle.

### Gravity's Grip: Effect of Gravity on Fluid Pressure

The pressure within a fluid at rest depends not only on the depth but also on the orientation of the fluid surface relative to the horizontal plane. Imagine a tilted container of water. The pressure at any point will still increase with depth measured along a vertical line from that point to the free surface of the liquid.

However, the pressure at a point will also depend on the vertical distance between that point and the free surface. This is because the weight of the fluid column above the point is now resolved into two components: one perpendicular to the surface and one parallel to the surface. The perpendicular component contributes to the pressure at the point, while the parallel component does not.

$$
P = P_0 + \rho g h \cos \theta
$$

where:

- $P_0$ is the pressure at the free surface
- $\theta$ is the angle between the vertical and the line connecting the point to the free surface

### The Invisible Skin: Surface Tension

Surface tension arises due to the intermolecular forces between the molecules of a liquid.  At the surface, liquid molecules experience an unbalanced force attracting them towards the bulk of the liquid. This creates a thin, invisible "skin" that tends to minimize the surface area.

$$
\gamma = \dfrac{F}{L}
$$

where, $\gamma$ is the surface tension, F is the force acting perpendicular to the surface, and L is the length over which the force acts.

**Angle of Contact:**

The angle of contact ($\theta$) is the angle formed between the liquid, the solid surface, and the tangent line drawn to the liquid surface at the point of contact. It depends on the interplay between the adhesive forces (between the liquid and solid) and cohesive forces (within the liquid).

* **High adhesive forces:** The liquid spreads more on the surface, resulting in a smaller contact angle (θ < 90°). Water wetting glass is a typical example.
* **High cohesive forces:** The liquid tends to minimize contact with the surface, forming a more spherical droplet with a larger contact angle (θ > 90°). Mercury on a smooth surface exhibits this behavior.

**Excess Pressure Across a Curved Surface:**

Due to surface tension, the pressure inside a curved liquid surface is slightly higher than the pressure outside. This can be understood by considering a small imaginary line segment within the liquid surface. The surface tension along this line acts like inward-directed forces that create a net pressure difference across the curved surface.

$$
\Delta P = \dfrac{2 \gamma}{r}
$$

where, r is the radius of curvature of the surface. This excess pressure is responsible for phenomena like capillary rise and the stability of soap bubbles.

**Applications of Surface Tension:**

* **Drops and Bubbles:** Surface tension plays a crucial role in the formation and behavior of drops and bubbles. It allows water droplets to maintain a spherical shape and soap bubbles to inflate.
* **Capillary Rise:** In narrow tubes (capillaries), surface tension can cause a liquid to rise against gravity. As the liquid rises, the surface tension at the edge of the liquid interacts with the tube wall, creating a force that pulls the liquid upwards.

**Equations for Capillary Rise:**

Assume a cylindrical capillary tube of uniform radius r dipped in a liquid. Forces acting on the liquid in the tube include the gravitational force,and the surface tension force. These forces should be in equilibrium.

$$
F_{\text{grav}} = F_{\text{surface tension}}
$$

$$
\pi r^2 h \rho g = 2 \pi r \gamma  \cos \theta
$$

Solving for h gives the height to which the liquid rises in the capillary tube.

$$
h = \dfrac{2 \gamma \cos θ}{\rho g r}
$$

where:

* γ is the surface tension of the liquid
* θ is the contact angle between the liquid and the tube wall
* ρ is the density of the liquid
* g is the acceleration due to gravity
* r is the radius of the capillary tube

By understanding surface tension, we gain insights into various natural phenomena and technological applications. From the formation of raindrops to the design of microfluidic devices, surface tension plays a vital role in the intricate world of fluids.

### The Sticky Fingers of Fluids: Viscosity

Viscosity ($\eta$) is a property of a fluid that describes its resistance to flow. Fluids with high viscosity resist flow more than those with low viscosity. Honey, for example, has a higher viscosity than water.

* **Stokes' Law:** This law describes the drag force (F) experienced by a spherical object of surface area (A) moving at a constant velocity (v) through a viscous fluid:

$$
F = \tau A
$$

where, $\tau$ is the shear stress. This is proportional to the rate of change of velocity (velocity gradient) with respect to distance perpendicular to the flow direction. This relationship is expressed by:

$$
\tau = \eta \dfrac{dv}{dy}
$$

where, $\eta$ is the dynamic viscosity of the fluid, and $\dfrac{dv}{dy}$ is the velocity gradient.

Reynolds number (Re) is a dimensionless quantity that characterizes the flow regime of a fluid. It is defined as the ratio of inertial forces to viscous forces:

$$
Re = \dfrac{\rho v L}{\eta}
$$

where, $\rho$ is the density of the fluid, v is the velocity of the fluid, and L is a characteristic length (e.g., diameter of a pipe). For Re < 2000, the flow is laminar, while for Re > 4000, the flow is turbulent.

For a sphere moving through a viscous fluid at low Reynolds number, a theoretical solution exists for the velocity profile around the sphere. This solution provides the expression for the velocity gradient at a specific distance from the sphere's surface. Integrating this gradient over the surface area of the sphere gives the drag force experienced by the sphere.

$$
F_{drag} =\eta A \frac{dv}{dy} = 6 \pi \eta r v
$$

where, r is the radius of the sphere. Stokes' law is applicable for low-velocity conditions and small objects.

* **Terminal Velocity:** For an object falling through a viscous fluid like air, the drag force increases with velocity. At a certain point, the drag force balances the gravitational force acting on the object, leading to a constant terminal velocity.

$$
F_{drag} = F_{grav}
$$

$$
6 \pi \eta r v = 4/3 \pi r^3 (\rho - \rho_{fluid}) g
$$

$$
v = \dfrac{2}{9} \dfrac{r^2 (\rho - \rho_{fluid}) g}{\eta}
$$

where, $\rho$ is the density of the object, and $\rho_{fluid}$ is the density of the fluid.

### Flow Regimes: Streamline vs. Turbulent

* **Streamline Flow:** In streamline flow, the fluid particles follow smooth, well-defined paths. This typically occurs at low velocities and for fluids with high viscosity.
* **Turbulent Flow:** When the velocity increases or the viscosity decreases, the flow becomes turbulent. The fluid particles exhibit irregular and chaotic motion.
* **Critical Velocity:** The critical velocity is the velocity at which the flow transitions from streamline to turbulent. It depends on the specific fluid properties and the geometry of the flow system.

### Bernoulli's Principle: Unveiling the Flow Symphony

Bernoulli's principle is a fundamental concept in fluid mechanics that relates the pressure (p), velocity (v), and density (ρ) of a fluid along a streamline:

$$
p + \rho gh + \dfrac{1}{2} \rho v^2 = constant
$$

This equation implies that an increase in the fluid velocity (v) in a streamline results in a decrease in pressure (p). Conversely, a decrease in velocity leads to an increase in pressure.

![Bernoulli](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/BernoullisLawDerivationDiagram.svg/2880px-BernoullisLawDerivationDiagram.svg.png)

**Derivation of Bernoulli's Equation:**

Consider a fluid element moving along a streamline. The work done on the fluid element by external forces is equal to the change in its kinetic energy and potential energy:

- The work done by the pressure acting on the areas $A_1$ and $A_2$:

$$
W_{pressure} = p_1 A_1 S_1 - p_2 A_2 S_2 = \Delta m \frac{p_1}{\rho} - \Delta m \frac{p_2}{\rho} = \frac{\Delta m}{\rho} (p_1 - p_2)
$$

- The work done by gravity: the gravitational potential energy in the volume $A_1 s_1$ is lost, and at the outflow in the volume $A_2 s_2$ is gained. So, the change in gravitational potential energy $\Delta E_{gravity}$ in the time interval $\Delta t$ is

$$
\Delta E_{gravity} = \Delta m g h_1 - \Delta m g h_2 = \Delta m g (h_1 - h_2)
$$

Therefore, the total work done on the fluid element is:

$$
W_{total} = W_{pressure} + \Delta E_{gravity} = \frac{\Delta m}{\rho} (p_1 - p_2) + \Delta m g (h_1 - h_2)
$$

The change in kinetic energy of the fluid element is:

$$
\Delta KE = \frac{1}{2} m (v_2^2 - v_1^2) = \frac{1}{2} \Delta m (v_2^2 - v_1^2)
$$

By the work-energy principle, the total work done on the fluid element is equal to the change in kinetic energy:

$$
W_{total} = \Delta KE
$$

$$
\frac{\Delta m}{\rho} (p_1 - p_2) + \Delta m g (h_1 - h_2) = \frac{1}{2} \Delta m (v_2^2 - v_1^2)
$$

$$
p_1 + \rho gh_1 + \frac{1}{2} \rho v_1^2 = p_2 + \rho gh_2 + \frac{1}{2} \rho v_2^2
$$

This equation is Bernoulli's equation, which states that the sum of pressure energy, gravitational potential energy, and kinetic energy per unit volume along a streamline is constant.

**Applications of Bernoulli's Principle:**

* **Airplane Wings:** The curved upper surface of an airplane wing creates a higher velocity airflow compared to the flat lower surface. According to Bernoulli's principle, this velocity difference results in a pressure difference, generating lift force that keeps the airplane airborne.
* **Venturi Effect:** This principle is applied in various devices like carburetors and spray nozzles. By constricting a flow channel, the fluid velocity increases, leading to a pressure drop. This pressure difference can be used to draw in a secondary fluid (e.g., fuel in a carburetor) or create a low-pressure region for suction.

### Navier-Stokes Equations: The Fluid Dynamics Symphony

The Navier-Stokes equations are a set of partial differential equations that describe the motion of fluid substances. They are derived from the principles of conservation of mass, momentum, and energy. The equations are:

$$
\dfrac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0
$$

$$
\rho \left( \dfrac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} \right) = - \nabla p + \nabla \cdot \mathbf{\tau} + \rho \mathbf{g}
$$

$$
\dfrac{\partial e}{\partial t} + \nabla \cdot (\mathbf{v} e) = - p \nabla \cdot \mathbf{v} + \nabla \cdot (\mathbf{\tau} \cdot \mathbf{v}) + \nabla \cdot (\mathbf{q}) + \rho \mathbf{g} \cdot \mathbf{v}
$$

where:

- $\rho$ is the density of the fluid
- $\mathbf{v}$ is the velocity vector
- p is the pressure
- $\mathbf{\tau}$ is the stress tensor
- e is the internal energy per unit mass
- $\mathbf{q}$ is the heat flux vector

The Navier-Stokes equations are fundamental in fluid dynamics and are used to model a wide range of fluid flow problems, from aerodynamics to weather patterns. However, they are complex and often require numerical methods for solution.

**In Conclusion:**

Our exploration of mechanical properties of fluids has unveiled a fascinating world governed by pressure, viscosity, and surface tension. By delving deeper into these concepts, we gain a greater appreciation for the intricate dance of fluids that shapes our world, from the flow of blood in our veins to the magnificent rise of tides in the oceans.
