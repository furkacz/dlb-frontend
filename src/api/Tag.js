import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async (file) => {
  if (!validators.requests.Tag.isValid(file)) {
    throw new errors.SchemaParsingError('Error sending Tag request - invalid request schema');
  }

  const response = await api.post(endpoints.Tag, file, {
    headers: {
      'Content-Type': file.type,
    },
    timeout: parseInt(process.env.VUE_APP_API_PURCHASE_TIMEOUT, 10),
  });

  if (!validators.responses.Tag.isValid(response.data)) {
    throw new errors.SchemaParsingError('Error parsing Tag response - invalid response schema');
  } else {
    return response.data;
  }
};
