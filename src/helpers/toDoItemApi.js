import { toDoItemsApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
api.get(toDoItemsApiUrl());

export const create = params =>
api.post(toDoItemsApiUrl(), {todo_item: {...params}});

export const remove = id =>
api.remove(toDoItemsApiUrl(id));

export const update = (id, params) =>
api.update(toDoItemsApiUrl(id), {todo_item: {...params}});
