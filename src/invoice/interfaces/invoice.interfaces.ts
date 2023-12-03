import { Document, ObjectId } from 'mongoose';
import { InvoiceStatus } from '../types';

export interface IInvoice extends Document {
  readonly idAffiliate: string;
  readonly creationDate: Date;
  readonly html: string;
  readonly status: InvoiceStatus;
  readonly invoiceId: string;
}

export interface IUpdateResponse {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: ObjectId;
  upsertedCount: number;
  matchedCount: number;
}

export interface IDeleteReturn {
  message: string;
}
