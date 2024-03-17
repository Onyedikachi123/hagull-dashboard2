/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table'; // Adjust the import path to match your file structure

describe('Table component', () => {
  it('renders table correctly', () => {
    const mockData = [
      // Add your mock data here
    ];
    render(<Table data={mockData} />);
    expect(screen.getByText('Order ID')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
