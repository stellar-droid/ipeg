const ViewWorkflow = ({ workflow, onBack }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold">View Workflow Details</h2>
      </div>

      <div className="grid gap-6 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4 border-b pb-4">
          <span className="font-semibold">Workflow ID:</span>
          <span>{workflow.id}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 border-b pb-4">
          <span className="font-semibold">Workflow Name:</span>
          <span>{workflow.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 border-b pb-4">
          <span className="font-semibold">Created Date:</span>
          <span>{workflow.createdDate}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 border-b pb-4">
          <span className="font-semibold">Last Updated:</span>
          <span>{workflow.lastUpdated || "Not updated yet"}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="font-semibold">Status:</span>
          <span className="text-green-600 flex items-center gap-2">
            <Check className="h-4 w-4" /> Active
          </span>
        </div>
      </div>
    </div>
  );
};

const EditWorkflow = ({ workflow, onBack, onSave }) => {
  const [formData, setFormData] = React.useState({
    name: workflow.name,
    description: "",
    status: "active",
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-semibold">Edit Workflow</h2>
        </div>
        <button
          onClick={() => onSave(formData)}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center gap-2"
        >
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div className="space-y-2">
          <label className="block font-medium">Workflow Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-2 border rounded h-32"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full p-2 border rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </form>
    </div>
  );
};

const DownloadWorkflow = ({ workflow, onBack }) => {
  const downloadFormats = [
    { id: "bpmn", name: "BPMN", size: "2.4 MB" },
    { id: "svg", name: "SVG", size: "1.8 MB" },
    // { id: "json", name: "JSON File", size: "856 KB" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold">Download Workflow</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-medium mb-4">Select Format to Download</h3>
        <div className="space-y-4">
          {downloadFormats.map((format) => (
            <div
              key={format.id}
              className="flex items-center justify-between p-4 border rounded hover:bg-gray-50"
            >
              <div>
                <h4 className="font-medium">{format.name}</h4>
                <p className="text-sm text-gray-500">Size: {format.size}</p>
              </div>
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center gap-2">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ShareWorkflow = ({ workflow, onBack }) => {
    const [copied, setCopied] = React.useState(false);
    const shareLink = `https://example.com/workflow/${workflow.id}`;
  
    const handleCopy = () => {
      navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-semibold">Share Workflow</h2>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Workflow Link</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareLink}
                readOnly
                className="flex-1 p-2 border rounded bg-gray-50"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center gap-2"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
  
          <div className="space-y-2">
            <h3 className="font-medium">Share Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Allow editing</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Allow downloading</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Set expiry date</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

import React from "react";
import {
  Search,
  Check,
  Edit,
  Download,
  Link,
  ArrowLeft,
  Save,
} from "lucide-react";

// ... [Previous view components remain the same: ViewWorkflow, EditWorkflow, DownloadWorkflow, ShareWorkflow] ...

const WorkflowTable = () => {
  const [entries, setEntries] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentView, setCurrentView] = React.useState(null);
  const [selectedWorkflow, setSelectedWorkflow] = React.useState(null);

  const workflowData = [
    {
      id: 1,
      name: "Sample Workflow 1",
      createdDate: "12/12/2024 06:29:16 PM",
      lastUpdated: "",
    },
    {
      id: 2,
      name: "Sample Wokrflow 2",
      createdDate: "18/04/2023 04:32:46 PM",
      lastUpdated: "19/03/2024 10:49:24 AM",
    },
    {
      id: 3,
      name: "Sample Workflow 3",
      createdDate: "04/03/2023 11:24:34 PM",
      lastUpdated: "19/03/2024 12:50:33 PM",
    },
  ];

  const filteredData = workflowData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (action, workflow) => {
    setSelectedWorkflow(workflow);
    setCurrentView(action);
  };

  const handleBack = () => {
    setCurrentView(null);
    setSelectedWorkflow(null);
  };

  // If a view is selected, show that view
  if (currentView === "view" && selectedWorkflow) {
    return <ViewWorkflow workflow={selectedWorkflow} onBack={handleBack} />;
  }

  if (currentView === "edit" && selectedWorkflow) {
    return <EditWorkflow workflow={selectedWorkflow} onBack={handleBack} />;
  }

  if (currentView === "download" && selectedWorkflow) {
    return <DownloadWorkflow workflow={selectedWorkflow} onBack={handleBack} />;
  }

  if (currentView === "share" && selectedWorkflow) {
    return <ShareWorkflow workflow={selectedWorkflow} onBack={handleBack} />;
  }

  // Otherwise show the main table
  return (
    <div className="p-4 space-y-4">
      {/* <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Workflow</h1>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">
          Add New Workflow
        </button>
      </div> */}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select
            className="border rounded p-1"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Search:</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1 max-w-xs"
            placeholder="Search workflows..."
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-orange-50">
            <tr>
              <th className="p-3 text-left font-semibold border-b">Sr. No</th>
              <th className="p-3 text-left font-semibold border-b">
                Name of the Workflow
              </th>
              <th className="p-3 text-left font-semibold border-b">
                Created Date
              </th>
              <th className="p-3 text-left font-semibold border-b">
                Last Updated Date
              </th>
              <th className="p-3 text-left font-semibold border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((workflow) => (
              <tr key={workflow.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{workflow.id}</td>
                <td className="p-3">{workflow.name}</td>
                <td className="p-3">{workflow.createdDate}</td>
                <td className="p-3">{workflow.lastUpdated}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction("view", workflow)}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleAction("edit", workflow)}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleAction("download", workflow)}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleAction("share", workflow)}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      <Link className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-3 bg-white border-t">
          <p className="text-sm text-gray-600">
            Showing 1 to {filteredData.length} of {filteredData.length} entries
            (filtered from {workflowData.length} total entries)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTable;
