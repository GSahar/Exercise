@echo off

set file_path=[ваш путь, от куда разворачиваете]
set host=127.0.0.1
set port=5432
set username=postgres
set db_name=postgres

pg_restore -v -c -C -h %host% -p %port% -U %username% -W -d postgres %file_path%\#000_last_dump.tar