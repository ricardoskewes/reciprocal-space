# Crystal visualizer
This project was born while studying solid-state Physics from standard references like Kittel and Aschroft. I found it hard to find good quality, interactive visualizations of crystalline structures on the Internet. So, I decided to create my own simulation using P5.JS, to help provide other students with intuition about crystals, their symmetries

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
