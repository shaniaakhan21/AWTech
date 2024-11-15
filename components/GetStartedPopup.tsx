import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, Button, Snackbar, Alert } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

interface GetStartedPopupProps {
    isOpen: boolean;
    onClose: () => void;
}


const ThankYouPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle className="text-center font-bold text-lg">Thank You!</DialogTitle>
            <DialogContent>
                <p className="text-center text-gray-700">
                    Thank you for choosing us! Our team will get back to you with a quote soon.
                </p>
            </DialogContent>
            <DialogActions className="justify-center">
                <Button onClick={onClose} color="primary" className="capitalize bg-[#FFC527] text-[#222222]">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};


export default function GetStartedPopup({ isOpen, onClose }: GetStartedPopupProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: [] as string[],
        projectType: '',
        startDate: '',
        details: '',
    });

    const [isThankYouPopupOpen, setThankYouPopupOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        const { name, value } = target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectServiceChange = (e: SelectChangeEvent<string[]>) => {
        const value = e.target.value as string[];
        setFormData((prev) => ({
            ...prev,
            service: value,
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        const requiredFields = ['name', 'phone', 'email', 'service', 'projectType', 'startDate'];
        const missingFields = requiredFields.filter(field => !formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0));

        if (missingFields.length > 0) {
            alert('Please fill out all required fields');
            return; // Prevent form submission if required fields are missing
        }

        try {
            const response = await fetch('http://localhost:5000/api/quote-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setThankYouPopupOpen(true); // Show Thank You Popup
                onClose(); // Close the form popup
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred');
        }
    };

    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedNextDay = nextDay.toISOString().split('T')[0];

    return (
        <>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className='rounded-full'>
                <DialogTitle className='text-sm sm:text-lg font-bold text-start sm:text-center'>Get Started with AW Technical Services</DialogTitle>
                <DialogContent dividers>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            margin="dense"
                        />
                        <TextField
                            label="Contact Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            margin="dense"
                            placeholder="+971"
                        />
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            margin="dense"
                        />
                        <div >
                            <Select
                                labelId="service-label"
                                name="service"
                                value={formData.service} // Ensure the initial state is set to "" or [""] for default behavior
                                onChange={handleSelectServiceChange}
                                fullWidth
                                multiple
                                required
                                displayEmpty
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Select Service(s)</em>;
                                    }
                                    return selected.join(', ');
                                }}
                                margin="dense"
                            >
                                <MenuItem disabled value="">
                                    <em>Select Service(s)</em>
                                </MenuItem>
                                <MenuItem value="building-maintenance">Building Maintenance</MenuItem>
                                <MenuItem value="glass-aluminium">Glass & Aluminium</MenuItem>
                                <MenuItem value="mep-works">MEP Works</MenuItem>
                                <MenuItem value="door-polishing">Door Polishing</MenuItem>
                                <MenuItem value="fixing-support">Fixing & Support</MenuItem>
                                <MenuItem value="painting">Painting</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                            {/* Add a note below the dropdown */}
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                Choose multiple or single service as per your requirement.
                            </p>
                        </div>
                        <Select
                            labelId="Project-type-label"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleSelectChange}
                            fullWidth
                            required
                            displayEmpty
                            margin="dense"
                        >
                            <MenuItem value="">
                                <em>Select Property type</em>
                            </MenuItem>
                            <MenuItem value="residential">Residential</MenuItem>
                            <MenuItem value="commercial">Commercial</MenuItem>
                        </Select>
                        <TextField
                            label="Preferred Start Date"
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleChange}
                            fullWidth
                            required
                            margin="dense"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                                htmlInput: {
                                    min: formattedNextDay,
                                },
                            }}
                        />

                        <TextField
                            label="Kindly provide a detailed description of your requirements here...."
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            margin="dense"
                            placeholder="Describe your needs here..."
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary" className="custom-button-black capitalize rounded-full w-fit px-2 text-xs sm:text-sm sm:px-4 font-medium text-[#222222] font-medium bg-[#F9F9F9] shadow-2xl border-black">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" onClick={handleSubmit} className="custom-button capitalize rounded-full mr-4 w-fit px-2 text-xs sm:text-sm sm:px-4 text-[#222222] font-medium bg-[#FFC527] shadow-2xl">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <ThankYouPopup
                isOpen={isThankYouPopupOpen}
                onClose={() => setThankYouPopupOpen(false)}
            />
        </>
    );
}
