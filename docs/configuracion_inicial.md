# Primer configuración

Al recibir el servidor de iukanet, la idea era

- cambiar contraseña
- añadir usuario **phpvalencia**
- habilitar conexión a través de `ssh` usando la clave públic del usuario ejecutando la configuración

## Archivo de configuración
>guardado en la carpeta un nivel superio a la raíz del proyecto

```
# para la primera vez sólo
[iukanet]
213.162.211.66

[iukanet:vars]
ansible_connection=ssh        
ansible_ssh_user=root
ansible_ssh_pass='<contraseña de iukanet>'
remote_tmp=/tmp/.ansible
root_password='<nuevo contraseña root>'
remote_user='phpvalencia'
remote_password='<nueva contraseña phpvalencia>'
public_key_file='<ruta a la clave públic de la maquina actual, por ejemplo ~/.ssh/id_rsa.pub>'
```

## Comando 
>desde la raíz del proyecto

    ansible-playbook provisioning/iukanet.yml -i ../iukanet