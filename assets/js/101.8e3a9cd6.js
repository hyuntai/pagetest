(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{372:function(t,s,a){"use strict";a.r(s);var e=a(25),l=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),a("li",[a("a",{attrs:{href:"#_1-postgresql-10-10-설치-소스-빌드"}},[t._v("1. PostgreSQL 10.10 설치(소스 빌드)")])]),a("li",[a("a",{attrs:{href:"#_2-database-role-table-생성"}},[t._v("2. Database, Role, Table 생성")])]),a("li",[a("a",{attrs:{href:"#_3-replication-생성"}},[t._v("3. Replication 생성")]),a("ul",[a("li",[a("a",{attrs:{href:"#dump"}},[t._v("dump")])]),a("li",[a("a",{attrs:{href:"#init-standby-sh"}},[t._v("init_standby.sh")])])])]),a("li",[a("a",{attrs:{href:"#_4-standby-서버는-replication-연결-등-작업을-수동으로-해야하지-않을까"}},[t._v("4. Standby 서버는 replication 연결 등 작업을 수동으로 해야하지 않을까?")]),a("ul",[a("li",[a("a",{attrs:{href:"#이슈"}},[t._v("이슈")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-postgresql-10-10-설치-소스-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-postgresql-10-10-설치-소스-빌드"}},[t._v("#")]),t._v(" 1. PostgreSQL 10.10 설치(소스 빌드)")]),t._v(" "),a("ul",[a("li",[t._v("설치 준비\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.postgresql.org/ftp/source/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source Download"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ dnf upgrade\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://www.postgresql.org/docs/10/install-procedure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.postgresql.org/docs/10/install-procedure.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("./configure --with-systemd")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// configure 수행 중에 error 발생한 package를 추가 설치한다.\n# dnf install readline-devel\n# dnf install systemd-devel\n# dnf install zlib-devel\n")])])]),a("ul",[a("li",[a("strong",[t._v("Build")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make \nsu \nmake install\n")])])]),a("ul",[a("li",[t._v("DB 초기화 및 테스트")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("adduser postgres\n\nchown postgres /usr/local/pgsql/data\nsu - postgres\n/usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data\n/usr/local/pgsql/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start\n/usr/local/pgsql/bin/createdb test\n/usr/local/pgsql/bin/psql test\n")])])]),a("ul",[a("li",[a("code",[t._v(".bash_profile")]),t._v(" 등록")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PGHOME=/usr/local/pgsql\nPGDATA=/usr/local/pgsql/data\nPGPORT=5432\nexport PGHOME PGDATA PGPORT\nexport LD_LIBRARY_PATH=/usr/local/pgsql/lib:$LD_LIBRARY_PATH\nexport PATH=/usr/local/pgsql/bin:$PATH\n")])])]),a("ul",[a("li",[t._v("mkdir -p /usr/local/pgsql/data/log   (로그 dir 생성)")]),t._v(" "),a("li",[t._v("설정파일 변경\n"),a("ul",[a("li",[t._v("pg_hba.conf")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host    all             all             0.0.0.0/0            md5\n")])])]),a("ul",[a("li",[t._v("postgresql.conf")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("listen_addresses = '*'\nwal_level = logical\n\n# yum install 로 설치한 .conf 파일과 비교하여 아래 내용 수정.\nlog_destination = 'stderr'\nlogging_collector = on\nlog_directory = 'log'\nlog_filename = 'postgresql-%a.log'\nlog_truncate_on_rotation = on\nlog_rotation_age = 1d\nlog_rotation_size = 0\nunix_socket_directories = '/var/run/postgresql, /tmp' \n\n# 다음은 설정 값 테스트 필요\nshared_buffers = 128MB\n")])])]),a("ul",[a("li",[t._v("(옵션) postgresql manpage")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('doc/src/sgml/make install (copy to /usr/local/pgsql/share/man)\nsudo vi /etc/man_db.conf\n- `add:` MANDATORY_MANPATH\t\t\t/usr/local/pgsql/share/man\n- 혹은, export MANPATH="$(manpath -g):/usr/local/pgsql/share/man"\n')])])]),a("ul",[a("li",[a("p",[t._v("systemctl 등록")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.postgresql.org/docs/10/server-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.postgresql.org/docs/10/server-start.html"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("$PGDATA/postgresql.service")]),t._v(" 생성")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[Unit]\nDescription=PostgreSQL database server\nDocumentation=man:postgres(1)\n\n[Service]\nType=notify\n\nUser=postgres\nGroup=postgres\n\n# Disable OOM kill on the postmaster\n# 여기만 새로 추가함.(shared 메모리가 부족해서 강제로 종료되지 않도록)\nOOMScoreAdjust=-1000  \n\nExecStart=/usr/local/pgsql/bin/postgres -D /usr/local/pgsql/data\nExecReload=/bin/kill -HUP $MAINPID\nKillMode=mixed\nKillSignal=SIGINT\n# 복구시 시간이 오래 걸릴 수 있음(기본은 90초)\nTimeoutSec=0\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("ul",[a("li",[t._v("systemctl 서비스 등록")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /usr/lib/systemd/system\nln -s /usr/local/pgsql/data/postgresql.service postgresql.service\nsystemctl enable postgresql\nsystemctl daemon-reload\nsystemctl start postgresql\nsystemctl stop postgresql\n")])])]),a("h2",{attrs:{id:"_2-database-role-table-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-database-role-table-생성"}},[t._v("#")]),t._v(" 2. Database, Role, Table 생성")]),t._v(" "),a("ul",[a("li",[t._v("미리 dump 해 놓은 pcpdb.sql을 이용한다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("postgres=# create database pcpdb;\npostgres=# create user pcpuser password 'pcpuser';\npostgres=# grant all privileges on database pcpdb to pcpuser;\npostgres=# \\c pcpdb\npostgres=# \\i pcpdb.sql   (테이블 생성 및 데이터 Import)\n")])])]),a("h2",{attrs:{id:"_3-replication-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-replication-생성"}},[t._v("#")]),t._v(" 3. Replication 생성")]),t._v(" "),a("h3",{attrs:{id:"dump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dump"}},[t._v("#")]),t._v(" dump")]),t._v(" "),a("h3",{attrs:{id:"init-standby-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-standby-sh"}},[t._v("#")]),t._v(" init_standby.sh")]),t._v(" "),a("ol",[a("li",[t._v("db connection check")]),t._v(" "),a("li",[t._v("alter subscription disable")]),t._v(" "),a("li",[t._v("drop subscription")]),t._v(" "),a("li",[t._v("drop database")]),t._v(" "),a("li",[t._v("create tables")]),t._v(" "),a("li",[t._v("create subscription")]),t._v(" "),a("li",[t._v("check replication")])]),t._v(" "),a("h2",{attrs:{id:"_4-standby-서버는-replication-연결-등-작업을-수동으로-해야하지-않을까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-standby-서버는-replication-연결-등-작업을-수동으로-해야하지-않을까"}},[t._v("#")]),t._v(" 4. Standby 서버는 replication 연결 등 작업을 수동으로 해야하지 않을까?")]),t._v(" "),a("h3",{attrs:{id:"이슈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이슈"}},[t._v("#")]),t._v(" 이슈")]),t._v(" "),a("ul",[a("li",[t._v("reboot 했을 때,  /var/run/postgresql 에 lock파일을 생성할 수 없다는 오류발생\n"),a("ul",[a("li",[t._v("일단 /var/run에 diretory가 존재하지 않음")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://serverfault.com/questions/766287/var-run-postgresql-missing-after-reboot",target:"_blank",rel:"noopener noreferrer"}},[t._v("/var/run/postgresql missing after reboot"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# cat /usr/lib/tmpfiles.d/postgresql.conf\nd /var/run/postgresql 0755 postgres postgres -\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);