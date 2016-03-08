$TTL	604800
@	IN	SOA	phpvalencia.es. admin.phpvalencia.es. (
		2015090401 ; Serial
		1200       ; Refresh
		300        ; Retry
		2419200    ; Expire
		1200 )     ; Negative Cache TTL

phpvalencia.es.	IN	NS	ns1.phpvalencia.es.
phpvalencia.es.	IN	NS	ns2.phpvalencia.es.
phpvalencia.es.	IN	MX	10 mail.phpvalencia.es.
localhost	IN	A	127.0.0.1
phpvalencia.es.	IN	A	213.162.211.66
; server host definitions
ns1		IN	A	213.162.211.66
ns2		IN	A	213.162.211.66
mail	IN	A	213.162.211.66
; specific sub-domains
www		IN	CNAME	phpvalencia.es.
; wildcard sub-domains - this should ALWAYS be the last line
*.phpvalencia.es.	IN	A 	213.162.211.66