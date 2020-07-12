import { login } from '../handlers/auth'
import { context, loginEvent } from './data/auth'

test('register an existing user', async () => {

    let response, error
    try {
        response = await login(loginEvent, context, null)
    } catch (err) {
        error = err
    }

    expect(error).toBeUndefined()
    expect(response).not.toBeUndefined()
    expect(response.statusCode).toBe(200)
})

test('login an existing user', async () => {

    let response, error
    try {
        response = await login(loginEvent, context, null)
    } catch (err) {
        error = err
    }

    expect(error).toBeUndefined()
    expect(response).not.toBeUndefined()
    expect(response.statusCode).toBe(200)
})