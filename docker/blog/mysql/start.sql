use blog;

CREATE USER 'login_user'@'%' IDENTIFIED BY 'login_password';

GRANT SELECT ON blog.* TO 'login_user'@'%';

CREATE TABLE Users (username varchar(255), passwd varchar(255));
INSERT INTO Users VALUES ('admin', 'mot_de_passe_beaucoup_trop_long');

CREATE TABLE Posts (title varchar(255), content text);

INSERT INTO Posts VALUES ('What is a CVE ?', 'CVE stands for "Common Vulnerabilities and Exposures". It is a list of publicly known information security vulnerabilities and exposures.
It is good consult some website like <a href="https://cve.mitre.org/">cve.mitre.org</a> to check if your website is vulnerable to a known CVE.
<br> There are plenty of different CVEs, but the most common are SQL injections, XSS, CSRF, etc.');

INSERT INTO Posts VALUES ('How to build a proper login page in php ?', 'To build a proper login page, 
you should use prepared statements and bind parameters. If you don\'t know what are prepared statements, you should read this 
<a href="https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php">tutorial</a>.');


INSERT INTO Posts VALUES ('Password', 'lock_and_key');