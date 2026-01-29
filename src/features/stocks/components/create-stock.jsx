import { useState } from 'react';
import { useCreateStock } from '../api/create-stock';
import { Modal } from '../../../components/ui/modal';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import './stocks.css';

export const CreateStock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
  });

  const createStock = useCreateStock({
    onSuccess: () => {
      setIsOpen(false);
      setFormData({ name: '', category: '', quantity: '', price: '' });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createStock.mutate({
      ...formData,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>+ Add Stock</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New Stock"
      >
        <form onSubmit={handleSubmit} className="stock-form">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <Input
            label="Quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <Input
            label="Price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <div className="form-actions">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" isLoading={createStock.isPending}>
              Create Stock
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};