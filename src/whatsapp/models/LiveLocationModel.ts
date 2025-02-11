/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as webpack from '../../webpack';
import { LiveLocationCollection, ParticipantCollection } from '../collections';
import { exportProxyModel } from '../exportModule';
import { Wid } from '../misc';
import {
  Model,
  ModelOptions,
  ModelPropertiesContructor,
  ModelProxy,
} from './Model';

interface Props {
  id: Wid;
  duration?: any;
}

interface Session {
  stale?: any;
  active?: any;
  keepAliveTimer?: any;
  stopPromise?: any;
}

interface Derived {}

/** @whatsapp 71306 */
export declare interface LiveLocationModel
  extends ModelProxy<Props, Session, Derived> {}

/** @whatsapp 71306 */
export declare class LiveLocationModel extends Model<LiveLocationCollection> {
  idClass: typeof Wid;
  constructor(
    proterties?: ModelPropertiesContructor<LiveLocationModel>,
    options?: ModelOptions
  );
  participants: ParticipantCollection;
  hasParticipants(): boolean;
  startViewingMap(): any;
  stopViewingMap(): any;
  userHasLiveLocation(e?: any): any;
  iHaveLiveLocation(): any;
  stopMyLiveLocation(e?: any): any;
  getCollection(): LiveLocationCollection;
}

exportProxyModel(exports, 'LiveLocationModel');

const fallback = {};
let cache: any = null;

// Lazy load
Object.defineProperty(fallback, 'LiveLocationModel', {
  configurable: true,
  enumerable: true,
  get() {
    if (!cache) {
      class LiveLocationModel extends Model {}
      LiveLocationModel.prototype.proxyName = 'live-location';
      cache = LiveLocationModel;
    }
    return cache;
  },
});

/**
 * @whatsapp >= 2.2301.5
 */
webpack.injectFallbackModule('LiveLocationModel', fallback);
