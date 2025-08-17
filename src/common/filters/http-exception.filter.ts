import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =
  exception instanceof HttpException
    ? exception.getResponse()
    : 'Erro interno do servidor';

if (typeof message === 'object' && message !== null) {
  message = (message as any).message || message;
}

if (typeof message === 'string') {
  switch (message) {
    case 'Unauthorized':
      message = 'Não autorizado';
      break;
    case 'Forbidden resource':
      message = 'Acesso negado';
      break;
    case 'Not Found':
      message = 'Recurso não encontrado';
      break;
    case 'Invalid credentials':
      message = 'Credenciais inválidas';
      break;
    default:
      break;
  }
}


    if (typeof message === 'object' && message !== null) {
      message = (message as any).message || message;
    }

    response.status(status).json({
      sucesso: false,
      statusCode: status,
      mensagem: message,
      caminho: request.url,
      timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' }),
    });
  }
}
