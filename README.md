# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Run the following command to roll back migrations.

```js
adonis migration:rollback
```

### Run project

Run the following command to run this project (dev mode).

```js
adonis serve --dev
```

### Make

Run the following command to create models (-m to add migration and -c to add controller).

```js
adonis make:model <ModelName> -m -c
```

Run the following command to create a hook.

```js
adonis make:hook <HookName>
```

Run the following command to create a validator.

```js
adonis make:validator <ValidatorName>
```

Run the following command to create a handler.

```js
adonis make:ehandler
```

### Job

Create a job.

```js
adonis make:job <JobName>
```

### Queue

Run queue.

```js
adonis kue:listen
```

### Routes

To see all endpoints, run the following command.

```js
adonis route:list
```
