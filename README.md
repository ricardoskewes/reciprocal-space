# Crystal visualizer
This project was born while studying solid-state Physics from standard references like Kittel and Aschroft. I found it hard to find good quality, interactive visualizations of crystalline structures on the Internet. Thus, I decided to create my own simulation (using P5.JS) to help provide intuition about the physics of crystals. 


## Features implemented
* 3D visualization of Lattice points
* Free configuration of lattice vectors $\mathbf{a}_i$
* Knob for number of lattice points


## Features to implement
* Computation of vectors of reciprocal (Fourier) lattice, $$\mathbf{b_i}=\frac{2\pi}{V}\sum_{j,k} \frac{1}{2} \epsilon_{ijk} (\mathbf{a_j}\times \mathbf{a_k})$$
* Show family of planes given by Miller indices $(hkl)$ and calculation of interplanar separation $d(hkl) = 2\pi/||\mathbf{g}_{hkl}||$ 
* Interface for adding a basis of atoms to the lattice points
* Library of common crystals with real data.
* Show unit cell, primitive cell and their volume. 
* User interface (with buttons, sliders, and colors)
* etc.



| ![lattice.png](https://user-images.githubusercontent.com/15040299/183003011-94fada0e-513f-4a4b-bf6a-a4413f57598b.png) | 
|:--:| 
| *Screenshot of simulation with 441 lattice points* |
