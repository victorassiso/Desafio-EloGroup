import React from 'react';
import { LeadProps } from '../DragDrop/DragDrop'

export function DragableElement({name}: LeadProps, {id}: LeadProps){
  return <p>{name}</p>;
}