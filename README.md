# Anteater

An application to measure container traffic and performance.

## Consumer

An http server to receive data.

### End points
>``` "/" redirects to "/status" ```
>
>```"/status"```
> returns 200
>
>```"/producer"```
>an end point to received a JSON body and write content to a file
>
>>returns 201 on success
>>
>>returns 400 on failure

## Producer
An http POST requested wrapped in ```setInterval()```