# Стартерпак для сборки справочника API с Foliant

Репозиторий для демонстрации возможности сборки сайта-справочника API через Foliant в Docker и его деплоя на Gitlab-pages.
Репозиторий содержит готовую конфигурацию для быстрой сборки справочника API с помощью бэкенда Slate. Также сюда добавлены шаблоны Widdershins (папка `widdershins_templates`) и файлы (`html`, `css`, `js`, шрифты) для Slate (папка `slate_shards`) — изменяя их, вы можете кастомизировать генерируемый сайт.

[Ссылка](https://foliant-slate-starterpack-denmaloyreb-3e71c2e3b035c652b35456b60.gitlab.io/#swagger-petstore) на сайт, собранный из этого репозитория. Он собирается из OpenAPI-спецификации Swagger Petstore.

## Локальная сборка сайта

***Для локальной сборки сайта у вас должен быть установлен [Docker](https://docs.docker.com/engine/install/).***

Чтобы собрать сайт локально:

1. Клонируйте репозиторий или скопируйте его содержимое удобным вам способом (например, в виде архива).
2. Находясь в папке склонированного (скопированного) репозитория, в терминале (консоли) выполните команду:

```bash
docker-compose run --rm foliant make site --with slate
```

Сгенерированный сайт будет находиться в папке `API.slate/`.

## Деплой сайта на Gitlab-pages

***Если вы клонируете этот репозиторий, не забудьте отвязать свою локальную копию от него и привязать её к своему репозиторию.***

В файле `.gitlab-ci.yml` заданы настройки CI/CD для сборки и деплоя сайта на Gitlab-pages.
Чтобы запустить сборку и деплой, сделайте push изменений или merge в ветку по умолчанию удаленного репозитория.

Чтобы узнать адрес сайта, который будет размещен на Gitlab-pages, после звершения сборки и деплоя перейдите в раздел `deploy` -> `pages` вашего репозитория на Gitlab.

**Подробнее о работе с Foliant — в [документации](https://foliant-docs.github.io/docs/) проекта.**
