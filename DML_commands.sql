use cadastro;

create table paciente(
nome varchar(30) not null,
id int not null auto_increment,
nascimento date,
nascionalidade varchar(20),
primary key (id)
);

insert into paciente 
(id, nome, nascimento, nascionalidade) values
(default,'Chico', '1987-02-11', 'Alemão'),
(default,'Antônia','1990-10-29', default);

alter table paciente
modify nascionalidade varchar(30) default 'Brasileiro';

delete from paciente where id='2';

insert into paciente 
(id, nome, nascimento, nascionalidade) values
(default,'Antônia','1990-10-29', default);

select * from paciente;

select nome, curso_preferido from gafanhotos;

select gafanhotos.nome, cursos.nome, cursos.ano
from gafanhotos join cursos
on cursos.idcurso = gafanhotos.curso_preferido;