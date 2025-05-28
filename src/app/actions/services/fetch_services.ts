import { services } from '@/app/components/home/services/data';

export const fetchMainServices = () => {
  const data = services.filter((service) => service.main == true);
  return data.length === 0 ? [] : data;
};

export const fetchAllServices = () => {
  return services;
};
