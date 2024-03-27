import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductModal from './ProductModal';

describe('ProductModal', () => {
  // Test for editing an existing product
  test('submits with updated fields for editing an existing product', () => {
    const originalProduct = { id: 1, name: 'Bitcoin', amount: '$40,000', rate: '1,500', symbol: '$' };
    const onSave = jest.fn();
    const onClose = jest.fn();

    render(<ProductModal product={originalProduct} isOpen={true} onSave={onSave} onClose={onClose} isEditing={true} />);

    fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '$45,000' } });
    fireEvent.change(screen.getByLabelText(/rate/i), { target: { value: '1,600' } });
    fireEvent.click(screen.getByText(/save/i));

    expect(onSave).toHaveBeenCalledWith({ ...originalProduct, amount: '$45,000', rate: '1,600' });
  });

  // Test for adding a new product
  test('submits with fields for a new product', () => {
    const onSave = jest.fn();
    const onClose = jest.fn();

    render(<ProductModal product={{}} isOpen={true} onSave={onSave} onClose={onClose} isEditing={false} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Ethereum' } });
    fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '$2,500' } });
    fireEvent.change(screen.getByLabelText(/rate/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/symbol/i), { target: { value: 'ETH' } });
    fireEvent.click(screen.getByText(/save/i));

    expect(onSave).toHaveBeenCalledWith({
      id: expect.any(Number), // Here we assume your onSave handler is adding an id
      name: 'Ethereum',
      amount: '$2,500',
      rate: '100',
      symbol: 'ETH',
    });
  });
});
