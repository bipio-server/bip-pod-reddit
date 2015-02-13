/**
 *
 * The Bipio Reddit Pod.  user action definition
 * ----------------------------------------------------------------------
 *
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var reddit = require('redwrap');
var _ = require('lodash');

function User(podConfig) {
  this.podConfig = podConfig; 
}

User.prototype = {};

User.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
	reddit.user(imports.username, function(err, data, res){
		if (err) {
			next(err);
		} else {
			_.forEach(data.data.children, function(child) {
				console.log(child.data);
				next(false, child.data);
			});
		}
	});
}

// -----------------------------------------------------------------------------
module.exports = User;
