# El Rincon De La Hamburguesa!
## _E-commerce Tu-shop El rincon de la hamburguesa_
Proyecto de un e-commerce para aprender el uso y funcionalidades de **ReactJS**. 
Se conecta con firebase como base de datos que nos ayuda a la autentificacion.

El proyecto tiene un panel de administrador para poder agregar productos, ver las ordenes de compra realizadas, poder ver los productos cargados.
Cuanta con una pagina para hacer el login de los usuarios.
Carrito de compra con opcion de descargar un pdf como ticket, mostrando los productos que compraste.

## Firebase 

Para que funcione el proyecto necesitamos:
- una coleccion llamada **restaurants** que contenga todos los restaurantes que vayamos a cargar

```sh
campo de la coleccion restaurants:
name: "Nombre_Del_Restaurante"
```
- vamos a necesitar tantas colecciones como restaurantes cargamos en **restaurants**, el nombre de dicha coleccion debe arrancar `r-${nombre_del_restaurante}`, en esta cargaremos los productos del restaurante:

```sh
campos de la coleccion r-nombre_del_restaurante:
title: "Nombre del producto"
category: "Categoria del producto"
description: "Descripcion del producto"
price: "Precio del producto"
```
