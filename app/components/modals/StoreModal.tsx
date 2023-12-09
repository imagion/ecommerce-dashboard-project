'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStoreModal } from '@/app/hooks/useStoreModal';
import { Modal } from '@/app/components/ui/Modal';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/Form';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/Button';

const formSchema = z.object({ name: z.string().min(1) });

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    ///
    console.log(values);
  };

  return (
    <Modal
      title='Create store'
      description='Add a new store...'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      <div className='space-y-4 pb-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='E-Commerce' {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
              <Button variant='outline' onClick={storeModal.onClose}>
                Cancel
              </Button>
              <Button type='submit'>Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
