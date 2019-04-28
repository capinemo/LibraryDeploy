#!/bin/sh

./config.sh

echo $USER

git log --pretty=format:"%cd %s"        список коммитов с тегами
git tag                                 список тегов
git show v1.4-lw                        инфо последний тег, строка Date:

git log --pretty=format:"%cd %s" | grep '^.*+....' | print

LAST_TAG=`git log --pretty=format:"%cd %s"`


Tue Apr 23 23:42:22 2019 +0300 Fixed: Cannot find module ../build/lib (Build firstly)
Tue Apr 23 23:34:03 2019 +0300 Added library tests to example
Tue Apr 23 23:03:20 2019 +0300 Init commit with sample of JS library
Tue Apr 23 22:18:57 2019 +0300 Initial commit

ssh 192.168.99.100